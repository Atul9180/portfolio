// utils/githubUtils.js
import axios from "axios";

export const fetchGitHubRepos = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    return response.data.slice(0, 4); // Limiting to top 4 repos
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};
