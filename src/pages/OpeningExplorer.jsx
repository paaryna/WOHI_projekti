import {useState} from "react";


function OpeningExplorer() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function fetchOpenings() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Maahi420/chess-openings-data/main/data/openings.json"
      );

      if (!response.ok) {
        throw new Error("Failed to load openings.");
      }

      const data = await response.json();
      setOpenings(data);

    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  const filteredOpenings = openings.filter((opening) =>
  opening.name.toLowerCase().includes(search.toLowerCase()) ||
  opening.eco.toLowerCase().includes(search.toLowerCase())
  );
  
  
  return (
    
    <section>
      <h2>Opening Explorer</h2>
      <p>Kirjotappa nimeä</p>


      <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
      {filteredOpenings.map((opening) => (
        <p key={`${opening.eco}-${opening.name}`}>
          <strong>{opening.eco}</strong> — {opening.name}
        </p>
        ))}
      </div>
    </section>
  );
}

export default OpeningExplorer;
