import axios from "axios";

const fetchUserData = async ({ searchTerm, location, minRepos, page = 1 }) => {
  try {
    let query = "";
    if (searchTerm) query += `${searchTerm} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query.trim()
      )}&page=${page}&per_page=10`
    );
    return response.data;
  } catch {
    // console.error("Error fetching user data:", error);
    throw error;
  }
};

export default fetchUserData;
