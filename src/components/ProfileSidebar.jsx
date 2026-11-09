function ProfileSidebar({ profile }) {
  return (
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
    </aside>
  );
}

export default ProfileSidebar;