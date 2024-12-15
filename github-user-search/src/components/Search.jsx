import { useState } from "react";
import fetchUserData from "../services/githubService";
import fetchUserDetails from "../services/githubDetailService";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const error_message = "Looks like we can't find the user.";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!searchTerm && !location && !minRepos) return;

    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);
    setHasMore(true);

    try {
      const data = await fetchUserData({
        searchTerm,
        location,
        minRepos,
        page: 1,
      });

      const detailedUsers = await fetchDetailedUsers(data.items);
      setUsers(detailedUsers);
      setHasMore(data.total_count > data.items.length);
    } catch {
      // console.error("Error fetching users:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchDetailedUsers = async (users) => {
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        try {
          const userDetails = await fetchUserDetails(user.login);
          return { ...user, ...userDetails };
        } catch {
          // console.error(`Error fetching details for ${user.login}:`, error);
          return user;
        }
      })
    );
    return detailedUsers;
  };

  const loadMore = async () => {
    if (!hasMore || loading) return;

    setLoading(true);
    try {
      const data = await fetchUserData({
        searchTerm,
        location,
        minRepos,
        page: page + 1,
      });

      const moreUsers = await fetchDetailedUsers(data.items);
      setUsers((prev) => [...prev, ...moreUsers]);
      setPage(page + 1);
      setHasMore(data.total_count > users.length + moreUsers.length);
    } catch {
      // console.error("Error loading more users:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Search GitHub Users
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 sm:space-x-4 sm:flex-row"
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border p-2 rounded sm:mt-4"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p>{error_message}</p>}
        {users.length > 0 && (
          <ul className="space-y-6">
            {users.map((user) => (
              <li
                key={user.id}
                className="border p-4 rounded flex justify-between items-center shadow-md"
              >
                <div>
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-bold">{user.login}</h3>
                  <h1>ID: {user.id}</h1>
                  <p>Location: {user.location || "Not provided"}</p>
                  <p>Repositories: {user.public_repos || "N/A"}</p>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </button>
              </li>
            ))}
          </ul>
        )}
        {hasMore && !loading && users.length > 0 && (
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
