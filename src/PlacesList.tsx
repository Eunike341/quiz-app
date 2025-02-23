import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

interface TravelData {
  id: string;
  name: string;
  location: string;
  population: string;
  traditionalFood: string;
  placeOfInterest: string;
  imageBase64: string;
  createdAt: Timestamp;
}

const PlacesList: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().slice(0, 10) // default today's date
  );
  const [places, setPlaces] = useState<TravelData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPlaces = async (dateStr: string) => {
    setLoading(true);
    setPlaces([]);

    const startDate = new Date(dateStr);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(dateStr);
    endDate.setHours(23, 59, 59, 999);

    const q = query(
      collection(db, "places"),
      where("createdAt", ">=", Timestamp.fromDate(startDate)),
      where("createdAt", "<=", Timestamp.fromDate(endDate))
    );

    const snapshot = await getDocs(q);
    const results: TravelData[] = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      results.push({
        id: doc.id,
        name: data.name,
        location: data.location,
        population: data.population,
        traditionalFood: data.traditionalFood,
        placeOfInterest: data.placeOfInterest,
        imageBase64: data.imageBase64,
        createdAt: data.createdAt,
      });
    });

    setPlaces(results);
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaces(selectedDate);
  }, [selectedDate]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Places Submitted</h2>

      <div className="mb-6">
        <label className="block text-lg font-bold mb-2">Select Date:</label>
        <input
          type="date"
          className="border p-3 rounded-lg w-full"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : places.length === 0 ? (
        <div className="text-center text-gray-500">No places found for this date.</div>
      ) : (
        <ul className="space-y-4">
          {places.map((place) => (
            <li key={place.id} className="p-4 border rounded-lg shadow-sm flex gap-4">
              <img
                src={`data:image/jpeg;base64,${place.imageBase64}`}
                alt={place.placeOfInterest}
                className="w-24 h-24 rounded-md object-cover shadow-sm"
              />
              <div>
                <h3 className="text-xl font-bold">{place.location}</h3>
                <p>
                  <span className="font-semibold">Submitted by:</span> {place.name}
                </p>
                <p>
                  <span className="font-semibold">Population:</span> {place.population}
                </p>
                <p>
                  <span className="font-semibold">Traditional Food:</span> {place.traditionalFood}
                </p>
                <p>
                  <span className="font-semibold">Place of Interest:</span> {place.placeOfInterest}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlacesList;
