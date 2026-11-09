


function ProfileSidebar({ profile, lichessUsername, setUsername, handleLoadProfile, loading, error }) {
  return (
    
    //Profile card
    <aside className="profile-sidebar">
      {profile ? (
        <section className="profile">
          <div className="profile-header">
            <div>
              <p className="eyebrow">Profile</p>
              <h2>{profile.username}</h2>
              <p className="muted">
                Member since{" "}
                {new Date(profile.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div className="profile-empty">
          <h3>No profile loaded</h3>
        </div>
      )}

      {/*profile load bar*/}
      <div className="profile-loader">

          <form onSubmit={handleLoadProfile}>
              <input
                type="text"
                value={lichessUsername}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Lichess username"
              />

              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Load Profile"}
              </button>
            </form>

            {error && <p className="error">{error}</p>}
      </div>
    </aside>

    
  );
}

export default ProfileSidebar;