import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import HomePage from "./pages/HomePage";






function App() {

  const [ratingHistory, setRatingHistory] = useState([]);
  

  
  
  return (
    <main className="dashboard">

      <h1>Shakki homma</h1>

      <nav className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/repertoire">Openings</Link>
        <Link to="/training">Training?</Link>
      </nav>

      
      <Routes> 
        <Route
          path="/home"
          element={<HomePage />}
        />

        
        <Route
          path="/repertoire"
          element={<OpeningExplorer />}

        />

        <Route
          path="/training"
          element={<h2>joku kolmas</h2>}
        />
      </Routes>
    </main>
  );
}

export default App;