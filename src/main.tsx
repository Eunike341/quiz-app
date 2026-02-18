import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import RecordsPage from "./RecordsPage.tsx";
import Layout from "./Layout.tsx";
import TravelForm from "./TravelForm.tsx";
import PlacesList from "./PlacesList.tsx";
import WrongAttemptsPage from "./WrongAttemptsPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Use Layout as the parent wrapper for all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="records" element={<RecordsPage />} />
          <Route path="places" element={<TravelForm />} />
          <Route path="places_list" element={<PlacesList />} />
          <Route path="/wrong-attempts" element={<WrongAttemptsPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
);