import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, where} from "firebase/firestore";
import db from "./firebase";
import { Score } from "./interface/Score";
import ScoreTable from "./components/ScoreTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const RecordsPage = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  useEffect(() => {
    const fetchScores = async () => {
      try {

        let q = query(collection(db, "quiz-app"), orderBy("score", "desc"));

        if (startDate && endDate) {
          const normalizedStart = new Date(startDate);
          normalizedStart.setHours(0, 0, 0, 0); // Start of day

          const normalizedEnd = new Date(endDate);
          normalizedEnd.setHours(23, 59, 59, 999); // End of day

          q = query(
            collection(db, "quiz-app"),
            orderBy("score", "desc"),
            where("timestamp", ">=", normalizedStart),
            where("timestamp", "<=", normalizedEnd)
          );
        }

        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Score[];
        setScores(data);
      } catch (error) {
        console.error("Error fetching scores:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [startDate, endDate]);

  return (
     <div className="p-4">
       <h1 className="text-xl font-bold mb-4">Submitted Scores</h1>

       {/* Date Pickers */}
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

       {/* Score Table */}
       <ScoreTable scores={scores} loading={loading} />
     </div>
   );
};

export default RecordsPage;
