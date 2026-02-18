import { useState } from "react";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import { db } from "./firebase";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type WrongAttempt = {
  q: string;
  wrongA: string;
  num: number;
};

type WrongAttemptsDoc = {
  quiz: string;
  name: string;
  timestamp: any; // Firestore Timestamp or Date (we’ll convert safely)
  wrongAttempts?: WrongAttempt[];
};

type FlatWrongAttempt = {
  quiz: string;
  name: string;
  timestamp: Date;
  q: string;
  wrongA: string;
  num: number;
};

type ByQuestionRow = {
  quiz: string;
  question: string;
  totalIncorrect: number;
  wrongAnswerBreakdown: { wrongA: string; total: number }[];
};

type ByUserRow = {
  name: string;
  dateTime: string;
  quiz: string;
  question: string;
  totalIncorrect: number;
  wrongAnswerBreakdown: { wrongA: string; total: number }[];
};

function toDate(ts: any): Date {
  // Firestore Timestamp has .toDate()
  if (ts?.toDate && typeof ts.toDate === "function") return ts.toDate();
  // Already a Date
  if (ts instanceof Date) return ts;
  // Fallback
  return new Date(ts);
}

function normalizeStart(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function normalizeEnd(d: Date): Date {
  const x = new Date(d);
  x.setHours(23, 59, 59, 999);
  return x;
}

function flattenDocs(docs: WrongAttemptsDoc[]): FlatWrongAttempt[] {
  const out: FlatWrongAttempt[] = [];
  for (const doc of docs) {
    const attempts = doc.wrongAttempts ?? [];
    const tsDate = toDate(doc.timestamp);
    for (const a of attempts) {
      out.push({
        quiz: doc.quiz,
        name: doc.name,
        timestamp: tsDate,
        q: a.q,
        wrongA: a.wrongA,
        num: Number(a.num ?? 0),
      });
    }
  }
  return out;
}

function aggregateByQuestion(rows: FlatWrongAttempt[]): ByQuestionRow[] {
  const map = new Map<string, { quiz: string; question: string; total: number; wrongAMap: Map<string, number> }>();

  for (const r of rows) {
    const key = `${r.quiz}||${r.q}`;
    let entry = map.get(key);
    if (!entry) {
      entry = { quiz: r.quiz, question: r.q, total: 0, wrongAMap: new Map() };
      map.set(key, entry);
    }
    entry.total += r.num;
    entry.wrongAMap.set(r.wrongA, (entry.wrongAMap.get(r.wrongA) ?? 0) + r.num);
  }

  return Array.from(map.values()).map((e) => ({
    quiz: e.quiz,
    question: e.question,
    totalIncorrect: e.total,
    wrongAnswerBreakdown: Array.from(e.wrongAMap.entries())
      .map(([wrongA, total]) => ({ wrongA, total }))
      .sort((a, b) => b.total - a.total),
  }))
  .sort((a, b) => b.totalIncorrect - a.totalIncorrect);
}

function aggregateByUserAndTimestamp(rows: FlatWrongAttempt[]): ByUserRow[] {
  // “sum only applies for the same name and timestamp” (and same quiz+question)
  const map = new Map<
    string,
    { name: string; ts: Date; quiz: string; question: string; total: number; wrongAMap: Map<string, number> }
  >();

  for (const r of rows) {
    const tsKey = r.timestamp.getTime(); // exact timestamp grouping
    const key = `${r.name}||${tsKey}||${r.quiz}||${r.q}`;

    let entry = map.get(key);
    if (!entry) {
      entry = { name: r.name, ts: r.timestamp, quiz: r.quiz, question: r.q, total: 0, wrongAMap: new Map() };
      map.set(key, entry);
    }
    entry.total += r.num;
    entry.wrongAMap.set(r.wrongA, (entry.wrongAMap.get(r.wrongA) ?? 0) + r.num);
  }

  return Array.from(map.values())
    .sort((a, b) => b.ts.getTime() - a.ts.getTime())
    .map((e) => ({
      name: e.name,
      dateTime: e.ts.toLocaleString(),
      quiz: e.quiz,
      question: e.question,
      totalIncorrect: e.total,
      wrongAnswerBreakdown: Array.from(e.wrongAMap.entries())
        .map(([wrongA, total]) => ({ wrongA, total }))
        .sort((a, b) => b.total - a.total),
    }))
    .sort((a, b) => b.totalIncorrect - a.totalIncorrect);;
}

const WrongAttemptsPage = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"question" | "user" | null>(null);

  const [byQuestion, setByQuestion] = useState<ByQuestionRow[]>([]);
  const [byUser, setByUser] = useState<ByUserRow[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (selectedMode: "question" | "user") => {
    try {
      setError(null);
      setLoading(true);
      setMode(selectedMode);

      if (!startDate || !endDate) {
        setError("Please select both Start Date and End Date.");
        return;
      }

      const from = normalizeStart(startDate);
      const to = normalizeEnd(endDate);

      // IMPORTANT: range filters require orderBy on the same field (timestamp)
      const qRef = query(
        collection(db, "quiz-app-wrong-attempts"),
        orderBy("timestamp", "desc"),
        where("timestamp", ">=", from),
        where("timestamp", "<=", to)
      );

      const snap = await getDocs(qRef);
      const docs = snap.docs.map((d) => d.data()) as WrongAttemptsDoc[];

      const flat = flattenDocs(docs);

      if (selectedMode === "question") {
        setByQuestion(aggregateByQuestion(flat));
        setByUser([]);
      } else {
        setByUser(aggregateByUserAndTimestamp(flat));
        setByQuestion([]);
      }
    } catch (e: any) {
      console.error(e);
      setError(e?.message ?? "Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Wrong Attempts</h1>

      {/* Date Pickers (mirrors your RecordsPage.tsx layout) */}
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-bold">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-bold">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-3 mb-4">
        <button
          className="border rounded px-4 py-2 font-semibold"
          onClick={() => fetchData("question")}
          disabled={loading}
        >
          Check by Question
        </button>

        <button
          className="border rounded px-4 py-2 font-semibold"
          onClick={() => fetchData("user")}
          disabled={loading}
        >
          Check by User
        </button>
      </div>

      {error && <div className="mb-3 text-red-600">{error}</div>}
      {loading && <div className="mb-3">Loading...</div>}

      {/* Tables */}
      {!loading && mode === "question" && (
        <div className="overflow-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 border-r">Quiz</th>
                <th className="text-left p-2 border-r">Question</th>
                <th className="text-left p-2 border-r">Number of Incorrect Answers</th>
                <th className="text-left p-2">Incorrect Answers</th>
              </tr>
            </thead>
            <tbody>
              {byQuestion.map((r, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 border-r">{r.quiz}</td>
                  <td className="p-2 border-r">{r.question}</td>
                  <td className="p-2 border-r">{r.totalIncorrect}</td>
                  <td className="p-2">
                    {r.wrongAnswerBreakdown.length === 0
                      ? "-"
                      : r.wrongAnswerBreakdown.map((x) => `${x.wrongA} (${x.total})`).join(", ")}
                  </td>
                </tr>
              ))}
              {byQuestion.length === 0 && (
                <tr>
                  <td className="p-2" colSpan={4}>
                    No results.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {!loading && mode === "user" && (
        <div className="overflow-auto">
          <table className="min-w-full border">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2 border-r">Name</th>
                <th className="text-left p-2 border-r">Date</th>
                <th className="text-left p-2 border-r">Quiz</th>
                <th className="text-left p-2 border-r">Question</th>
                <th className="text-left p-2 border-r">Number of Incorrect Answers</th>
                <th className="text-left p-2">Incorrect Answers</th>
              </tr>
            </thead>
            <tbody>
              {byUser.map((r, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2 border-r">{r.name}</td>
                  <td className="p-2 border-r">{r.dateTime}</td>
                  <td className="p-2 border-r">{r.quiz}</td>
                  <td className="p-2 border-r">{r.question}</td>
                  <td className="p-2 border-r">{r.totalIncorrect}</td>
                  <td className="p-2">
                    {r.wrongAnswerBreakdown.length === 0
                      ? "-"
                      : r.wrongAnswerBreakdown.map((x) => `${x.wrongA} (${x.total})`).join(", ")}
                  </td>
                </tr>
              ))}
              {byUser.length === 0 && (
                <tr>
                  <td className="p-2" colSpan={6}>
                    No results.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WrongAttemptsPage;
