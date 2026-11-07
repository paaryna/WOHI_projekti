import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import OpeningExplorer from "./pages/OpeningExplorer";





function App() {
  const [lichessUsername, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  
  return (
    <main className="dashboard">

      <h1>Shakki homma</h1>

      <nav className="navigation">
        <Link to="/home">Home</Link>
        <Link to="/openings">Openings</Link>
        <Link to="/training">Training?</Link>
      </nav>

      
      <Routes> 
        <Route
          path="/home"
          element={<HomePage lichessUsername={lichessUsername} setUsername={setUsername} profile={profile} setProfile={setProfile}/>}
        />

      <Route
          path="/openings"
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