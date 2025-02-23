// TravelFormView.tsx
import React, { ChangeEvent, FormEvent } from "react";
import TravelFormViewProps from "../interface/TravelFormViewProps"

const TravelFormView: React.FC<TravelFormViewProps> = ({
  name,
  location,
  population,
  traditionalFood,
  placeOfInterest,
  uploading,
  message,
  onNameChange,
  onLocationChange,
  onPopulationChange,
  onTraditionalFoodChange,
  onPlaceOfInterestChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <div className="max-w-2xl w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Travel Form</h2>

      {message && (
        <div
          className={`p-3 mb-4 text-center rounded font-semibold ${
            message.includes("Error")
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-lg font-bold">Your Name</label>
          <input
            type="text"
            className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            value={name}
            onChange={onNameChange}
            required
          />
        </div>

        {/* Country/City */}
        <div>
          <label className="block text-lg font-bold">Country/City</label>
          <input
            type="text"
            className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            value={location}
            onChange={onLocationChange}
            required
          />
        </div>

        {/* Population */}
        <div>
          <label className="block text-lg font-bold">Population</label>
          <input
            type="number"
            className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            value={population}
            onChange={onPopulationChange}
            required
          />
        </div>

        {/* Traditional Food */}
        <div>
          <label className="block text-lg font-bold">Traditional Food</label>
          <input
            type="text"
            className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            value={traditionalFood}
            onChange={onTraditionalFoodChange}
            required
          />
        </div>

        {/* Place of Interest */}
        <div>
          <label className="block text-lg font-bold">Place of Interest</label>
          <input
            type="text"
            className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            value={placeOfInterest}
            onChange={onPlaceOfInterestChange}
            required
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-lg font-bold">Upload Picture</label>
          <input
            type="file"
            accept="image/*"
            className="border p-3 rounded-lg w-full mt-2 focus:ring-2 focus:ring-blue-500 transition-all"
            onChange={onFileChange}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="w-full bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-700 active:scale-95 transition-all font-bold disabled:bg-gray-400"
        >
          {uploading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default TravelFormView;
