/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from 'react';

const GitHubListUsers = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');
  const search = useRef('');

  const getRepos = async (value) => {
    const result = await fetch(`https://api.github.com/users/${value}/repos`);
    if (result.status === 404) {
      setError("User doesn't exist");
    } else {
      const data = await result.json();
      setError('');
      setRepos(data);
    }
  };

  useEffect(() => {
    const getData = async () => {
      getRepos('Lucas-Pleck');
    };
    getData();
  }, []);

  const searchRepos = async (e) => {
    e.preventDefault();
    const input = search.current.value;
    if (input.length >= 3) {
      getRepos(input);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={searchRepos} className="flex items-end w-1/2 px-6">
        <div className="flex flex-col">
          <label htmlFor="search" className="font-semibold text-sm mb-1">
            Search for an user
          </label>
          <input
            type="text"
            name="search"
            className="border-2 border-indigo-600 px-2"
            id=" search"
            ref={search}
          />
          <div className="text-red-600 text-sm mt-1">{error}</div>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 px-3 py-2 text-white font-semibold rounded-sm duration-200 hover:bg-indigo-300 ml-8">
          SEARCH
        </button>
      </form>
      {repos.map((repo) => (
        <div key={repo.id} className="py-1 mx-12">
          <a
            href={repo.html_url}
            className="text-blue-500"
            target="_blank"
            rel="noreferrer">
            {repo.full_name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default GitHubListUsers;
