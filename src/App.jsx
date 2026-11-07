import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [lichessUsername, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  
  function handleSubmit(event){
    event.preventDefault();

    fetch()
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
                  <label htmlFor="username">Lichess username</label>

                  <input
                    id="username"
                    type="text"
                    value={username}
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