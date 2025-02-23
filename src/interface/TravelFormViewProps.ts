export interface TravelFormViewProps {
     name: string;
     location: string;
     population: string;
     traditionalFood: string;
     placeOfInterest: string;
     uploading: boolean;
     message: string;
     onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
     onLocationChange: (e: ChangeEvent<HTMLInputElement>) => void;
     onPopulationChange: (e: ChangeEvent<HTMLInputElement>) => void;
     onTraditionalFoodChange: (e: ChangeEvent<HTMLInputElement>) => void;
     onPlaceOfInterestChange: (e: ChangeEvent<HTMLInputElement>) => void;
     onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
     onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}