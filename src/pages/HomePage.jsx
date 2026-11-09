import {useState} from "react";

function HomePage({lichessUsername, setUsername, profile, setProfile}){
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [ratingHistory, setRatingHistory] = useState([]);

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

        
        //---------------This data not used anywhere yet
        const historyResponse = await fetch(`https://lichess.org/api/user/${encodeURIComponent(lichessUsername.trim())}/rating-history`);

        if ((!historyResponse.ok)) {
            throw new Error("Ei onnistu nyt");

        }

        const historyData = await historyResponse.json();

        const rapidHistory = historyData.find((item) => item.name === "Rapid");

        setRatingHistory(rapidHistory ? rapidHistory.points : []);

        }
        //----------------------------------------
        
        catch (error){
            setError(error.message);
            console.log(error.message);
        }

        setLoading(false);
    }
        
        
        
        
        return (

            <>
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
                  <button type="submit">Load profile</button>
                </div>
                
                </form>
              
              {error && <p>{error}</p>}

              {profile && (
                <section className="profile">
                

                <h3>Ratings</h3>

                <div className="rating-grid">
                  
                  <div className="stat-card">
                    <p className="muted">Rapid</p>
                    <h2>{profile.perfs?.rapid?.rating ?? "—"}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Blitz</p>
                    <h2>{profile.perfs?.blitz?.rating ?? "—"}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Bullet</p>
                    <h2>{profile.perfs?.bullet?.rating ?? "—"}</h2>
                  </div>
                
                  <div className="stat-card">
                    <p className="muted">Puzzles</p>
                    <h2>{profile.perfs?.puzzle?.rating ?? "—"}</h2>
                  </div>        

                  <div className="stat-card">
                    <p className="muted">Classical</p>
                    <h2>{profile.perfs?.classical?.rating ?? "—"}</h2>
                  </div>            
                
                
                </div>



                <h3>Game Statistics</h3>

                <div className="game-grid">
                  <div className="stat-card">
                    <p className="muted">Total Games</p>
                    <h2>{profile.count?.all ?? 0}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Wins</p>
                    <h2>{profile.count?.win ?? 0}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Draws</p>
                    <h2>{profile.count?.draw ?? 0}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Losses</p>
                    <h2>{profile.count?.loss ?? 0}</h2>
                  </div>
                </div>

              </section>
            )}

            </>
        
        );


    }


export default HomePage;