"use client";
import { useEffect, useState } from "react";
import { fetchGitHubRepos } from "@/utils/fetchGitHubRepos.js";
import Link from "next/link";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const username = "Atul9180"; // Replace with your GitHub username
    fetchRepos(username);
  }, []);

  const fetchRepos = async (username) => {
    const repos = await fetchGitHubRepos(username);
    setRepos(repos);
  };

  return (
    <div className=" p-7 sm:p-2 lg:p-10 bg-gray-200 ">
      <div className="flex flex-col text-center w-full my-2">
        <h2 className="text-4xl font-medium my-6 text-center">
          Recent Projects
        </h2>
      </div>

      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="card shadow-lg p-4 mb-5 bg-white rounded-xl"
            >
              <div className="card-body">
                <h5 className="card-title font-semibold p-3 mt-3 mb-3">
                  {repo.name}
                </h5>
                <p className="card-text"></p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <Link
                    href={repo.clone_url}
                    className="flex items-center outline rounded-sm justify-center py-1 text-gray-600 hover:bg-gray-600 hover:text-white "
                  >
                    <i className="fab fa-github"></i>
                    <span>Clone Project</span>
                  </Link>
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="outline rounded-sm flex items-center justify-center py-1 text-gray-600 hover:bg-gray-600 hover:text-white"
                  >
                    <i className="fab fa-github"></i>
                    <span>Repo</span>
                  </Link>
                </div>
                <hr className="my-4" />
                <div className="pb-3">
                  {repo.language && (
                    <span className="badge bg-gray-200 text-gray-800">
                      {repo.language}
                    </span>
                  )}
                </div>
                <p className="card-text">
                  <a
                    href={repo.stargazers_url}
                    target="_blank"
                    className="text-dark text-decoration-none mr-4"
                  >
                    <i className="fab fa-github"></i>
                    <span>Stars</span>
                    <span className="badge badge-dark">
                      {repo.stargazers_count}
                    </span>
                  </a>
                  <small className="text-muted">
                    Updated on {new Date(repo.updated_at).toLocaleDateString()}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
