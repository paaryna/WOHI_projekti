import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [lichessUsername, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(event){
    event.preventDefault();
    

    setLoading(true);
    setError("");
    setProfile(null);

    try {
      const response = await fetch(
        `https://lichess.org/api/user/${encodeURIComponent(lichessUsername.trim())}`
    );
      if (!response.ok){
        throw new Error("User not found!");
      }

      const data = await response.json();

      setProfile(data);
    }
    
    
      catch (error){
        setError(error.message);
        console.log(error.message);
    }

    setLoading(false);
  }
  
  
  return (
    <main className="dashboard">

      <h1>Shakki homma</h1>

      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/repertoire">Openings</Link>
        <Link to="/training">Training?</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <h2>Statistics</h2>
              <p>Annappa käyttäjänimmee</p>

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="lichessUsername">Lichess username</label>

                  <input
                    id="lichessUsername"
                    type="text"
                    value={lichessUsername}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter your username"
                  />
                  
                </div>
                <button type="submit">Load profile</button>
                
              </form>
            </>
          }
        />

        <Route
          path="/repertoire"
          element={<h2>Openings</h2>}
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