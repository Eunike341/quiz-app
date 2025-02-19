import React from "react";
import { ScoreTableProps } from "../interface/ScoreTableProps";

const ScoreTable: React.FC<ScoreTableProps> = ({ scores, loading }) => {
  return (
    <div className="p-4">
      {loading ? (
        <p>Loading scores...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Score</th>
              <th className="border border-gray-300 px-4 py-2">Quiz</th>
            </tr>
          </thead>
          <tbody>
            {scores.length > 0 ? (
              scores.map((record) => (
                <tr key={record.id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{record.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{record.score}</td>
                  <td className="border border-gray-300 px-4 py-2">{record.quiz}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="border border-gray-300 px-4 py-2">
                  No scores submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ScoreTable;
