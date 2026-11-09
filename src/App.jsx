import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import OpeningExplorer from "./pages/OpeningExplorer";
import ChessBoardPage from "./pages/ChessBoardPage";
import ProfileSidebar from "./components/ProfileSidebar";




function App() {
  const [lichessUsername, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function handleLoadProfile(event) {
  event.preventDefault();

  setLoading(true);
  setError("");
  setProfile(null);

  try {
    const response = await fetch(
      `https://lichess.org/api/user/${encodeURIComponent(lichessUsername.trim())}`
    );

    if (!response.ok) {
      throw new Error("User not found!");
    }

    const data = await response.json();
    setProfile(data);
  } catch (error) {
    setError(error.message);
  }

  setLoading(false);
}
  
  return (
    <div className="app-layout">
      
      <ProfileSidebar profile={profile} lichessUsername={lichessUsername} setUsername={setUsername} handleLoadProfile={handleLoadProfile} loading={loading} error={error}/>

    <main className="main-content">
    
      

      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/openings">Openings</Link>
        <Link to="/chessBoard">Chess Board</Link>
      </nav>

      
      <Routes> 
        <Route
          path="/"
          element={<HomePage lichessUsername={lichessUsername} setUsername={setUsername} profile={profile} setProfile={setProfile}/>}
        />

      <Route
          path="/openings"
          element={<OpeningExplorer />}

        />

        <Route
          path="/chessBoard"
          element={<ChessBoardPage />}
        />
      </Routes>
    </main>
    </div>
  );
}

export default App;