import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy} from "firebase/firestore";
import db from "./firebase";
import { Score } from "./interface/Score";
import ScoreTable from "./components/ScoreTable";


const RecordsPage = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {

        const q = query(collection(db, "quiz-app"), orderBy("score", "desc"));
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
  }, []);

  return <ScoreTable scores={scores} loading={loading} />;
};

export default RecordsPage;
