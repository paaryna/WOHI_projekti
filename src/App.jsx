import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import OpeningExplorer from "./pages/OpeningExplorer";
import ChessBoardPage from "./pages/ChessBoardPage";
import ProfileSidebar from "./components/ProfileSidebar";




function App() {
  const [lichessUsername, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  
  return (
    <div className="app-layout">
      
      <ProfileSidebar profile={profile} />

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