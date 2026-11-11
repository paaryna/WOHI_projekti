import {useState, useEffect} from "react";


function OpeningExplorer() {
  const [openings, setOpenings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const filteredOpenings = openings.filter((opening) => {
  const searchTerm = search.toLowerCase();
  const name = opening.name?.toLowerCase() ?? "";
  const eco = opening.eco?.toLowerCase() ?? "";

  return name.includes(searchTerm) || eco.includes(searchTerm);
});
  
  
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

  useEffect(()=>{fetchOpenings();},[]);

  
  
  
  return (
    
    <section>
      <h2>Opening Explorer</h2>
      <p>Matching openings: {filteredOpenings.length}</p>


      <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
      />
      
      

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="opening-list">
        {filteredOpenings.map((opening) => (
          <div className="opening-card" key={opening.url}>
            <div className="opening-header">
              <h3>{opening.name}</h3>

            </div>

            <p>
              {opening.style} | Difficulty: {opening.difficulty}/5
            </p>

            <p>{opening.description}</p>

            <details>
              <summary>View opening moves</summary>
              <p>{opening.moves}</p>
            </details>
          </div>
        ))}
      </div>

    </section>
  );

}

export default OpeningExplorer;
