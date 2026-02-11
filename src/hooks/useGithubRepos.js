import { useEffect, useState } from "react";
import axios from "axios";

const GITHUB_USERNAME = "anandhalakshmii";
const MAX_PROJECTS = 20;

// In-memory cache (prevents repeat API calls per session)
let cachedRepos = null;

export default function useGithubRepos() {
  const [repos, setRepos] = useState(cachedRepos || []);
  const [loading, setLoading] = useState(!cachedRepos);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedRepos) return;

    const fetchRepos = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
          {
            params: {
              sort: "updated",
              per_page: 20
            }
          }
        );

        const filtered = res.data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, MAX_PROJECTS);

        // Enrich with language breakdown
        const enriched = await Promise.all(
          filtered.map(async (repo) => {
            try {
              const langRes = await axios.get(repo.languages_url);
              return {
                ...repo,
                languages: Object.keys(langRes.data)
              };
            } catch {
              return {
                ...repo,
                languages: []
              };
            }
          })
        );

        cachedRepos = enriched;
        setRepos(enriched);
      } catch (err) {
        console.error("GitHub fetch failed:", err.message);
        setError("Unable to load GitHub projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
