const fetchUserDetails = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return await response.json();
  } catch {
    // console.error("Error fetching user details:", error);
    throw error;
  }
};

export default fetchUserDetails;
