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
      console.log(data[0]);
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

      <div>
      {filteredOpenings.map((opening) => (
        <p key={opening.url}>
        {opening.name}
        </p>
        ))}
      </div>
    </section>
  );

}

export default OpeningExplorer;
