import React, { useState, ChangeEvent, FormEvent } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import TravelFormView from "./components/TravelFormView";

const TravelForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [population, setPopulation] = useState<string>("");
  const [traditionalFood, setTraditionalFood] = useState<string>("");
  const [placeOfInterest, setPlaceOfInterest] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const compressAndConvertToBlob = (file: File): Promise<Uint8Array> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const MAX_SIZE = 100; // Thumbnail size

          let width = img.width;
          let height = img.height;

          if (width > height) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          } else {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }

          canvas.width = width;
          canvas.height = height;
          ctx?.drawImage(img, 0, 0, width, height);

          // Convert to Blob
          canvas.toBlob((blob) => {
            if (!blob) return reject("Blob conversion failed");
            const reader = new FileReader();
            reader.readAsArrayBuffer(blob);
            reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
          }, "image/jpeg", 0.7);
        };
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const uint8ArrayToBase64 = (uint8Array: Uint8Array): string => {
    let binary = "";
    uint8Array.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary); // Convert binary string to Base64
  };

  const getBase64SizeInKB = (base64String: string): number => {
    const padding = (base64String.match(/=/g) || []).length;
    const bytes =  (base64String.length * 3) / 4 - padding;
    return parseFloat((bytes / 1024).toFixed(2));
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUploading(true);
    setMessage("");

    try {
      let imageBase64 = "";
      let imageSizeKB = 0;

      if (imageFile) {
        const imageBlob = await compressAndConvertToBlob(imageFile);
        imageBase64 = uint8ArrayToBase64(imageBlob);
        imageSizeKB = getBase64SizeInKB(imageBase64);
      }

      await addDoc(collection(db, "places"), {
        name,
        location,
        population,
        traditionalFood,
        placeOfInterest,
        imageBase64: imageBase64,
        imageSizeKB,
        createdAt: new Date(),
        inviteCode: "MINGGU_BELAJAR",
      });

      setMessage("Data submitted successfully!");
      // Reset form fields
      setName("");
      setLocation("");
      setPopulation("");
      setTraditionalFood("");
      setPlaceOfInterest("");
      setImageFile(null);
    } catch (error) {
      console.error("Error uploading data:", error);
      setMessage("Error uploading data.");
    }
    setUploading(false);
  };

  return (
    <TravelFormView
      name={name}
      location={location}
      population={population}
      traditionalFood={traditionalFood}
      placeOfInterest={placeOfInterest}
      uploading={uploading}
      message={message}
      onNameChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      onLocationChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
      onPopulationChange={(e: ChangeEvent<HTMLInputElement>) => setPopulation(e.target.value)}
      onTraditionalFoodChange={(e: ChangeEvent<HTMLInputElement>) => setTraditionalFood(e.target.value)}
      onPlaceOfInterestChange={(e: ChangeEvent<HTMLInputElement>) => setPlaceOfInterest(e.target.value)}
      onFileChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
          setImageFile(e.target.files[0]);
        }
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default TravelForm;
