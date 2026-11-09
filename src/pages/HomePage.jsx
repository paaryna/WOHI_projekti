
function HomePage({profile}){
    

  
        return (

            <>
              
              
              

              
                <section className="profile">
                

                <h3>Ratings</h3>

                <div className="rating-grid">
                  
                  <div className="stat-card">
                    <p className="muted">Rapid</p>
                    <h2>{profile ? profile.perfs?.rapid?.rating ?? "—" : "?"}</h2>
                    <p className="muted">Games: {profile ? profile.perfs?.rapid?.games ?? "-" : "?"}</p>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Blitz</p>
                    <h2>{profile ? profile.perfs?.blitz?.rating ?? "—" : "?"}</h2>
                    <p className="muted">Games: {profile ? profile.perfs?.blitz?.games ?? "-" : "?"}</p>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Bullet</p>
                    <h2>{profile ? profile.perfs?.bullet?.rating ?? "—": "?"}</h2>
                    <p className="muted">Games: {profile ? profile.perfs?.bullet?.games ?? "-" : "?"}</p>
                  </div>
                
                  <div className="stat-card">
                    <p className="muted">Puzzles</p>
                    <h2>{profile ? profile.perfs?.puzzle?.rating ?? "—" :"?"}</h2>
                    <p className="muted">Games: {profile ? profile.perfs?.puzzle?.games ?? "-" : "?"}</p>
                  </div>        

                  <div className="stat-card">
                    <p className="muted">Classical</p>
                    <h2>{profile ? profile.perfs?.classical?.rating ?? "—" : "?"}</h2>
                    <p className="muted">Games: {profile ? profile.perfs?.classical?.games ?? "-" : "?"}</p>
                  </div>            
                
                  <div className="stat-card">
                    <p className="muted">Correspondence</p>
                    <h2>{profile ? profile.perfs?.correspondence?.rating ?? "—" : "?"}</h2>
                    <p className="muted">Games: {profile ? profile.perfs?.correspondence?.games ?? "-" : "?"}</p>
                  </div>            
                
                
                </div>



                <h3>Game Statistics</h3>

                <div className="game-grid">
                  <div className="stat-card">
                    <p className="muted">Total Games</p>
                    <h2>{profile ? profile.count?.all ?? 0 : "-"}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Wins</p>
                    <h2>{profile ? profile.count?.win ?? 0 : "-"}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Draws</p>
                    <h2>{profile ? profile.count?.draw ?? 0 : "-"}</h2>
                  </div>

                  <div className="stat-card">
                    <p className="muted">Losses</p>
                    <h2>{profile ? profile.count?.loss ?? 0 : "-"}</h2>
                  </div>
                </div>

              </section>
            

            </>
        
        );


    }


export default HomePage;