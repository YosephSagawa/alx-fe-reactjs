import { useState, useEffect } from "react";
import githubServices from "../services/githubService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (event) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    setSearchTerm = event.target.Value;
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Search User"
          id="Search User"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Search;
