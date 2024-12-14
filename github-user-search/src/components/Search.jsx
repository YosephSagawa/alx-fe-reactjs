import { useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(searchTerm);
      setUserData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="SearchUser"
          id="SearchUser"
          placeholder="Enter GitHub username: "
          onChange={handleChange}
          value={searchTerm}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find the user</p>}
        {userData && (
          <div>
            <img src={userData.avatar_url} alt={userData.login} width="100" />
            <h2>{userData.login || "No name available"}</h2>
            <p>Username: {userData.login}</p>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
