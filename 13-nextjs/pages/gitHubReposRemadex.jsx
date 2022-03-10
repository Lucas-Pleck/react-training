import Layout from "../components/Layout";
import Link from "next/link";

export default function GitHubReposRemadex({ data }) {
  return (
    <Layout title="RemadexRepos" currentPage="RemadexRepos">
      <h1 className="border-b-2 border-b-indigo-600 pb-2 text-4xl mb-8">
        Git Hub Repos Remadex
      </h1>
      <ul>
        {data.map((repo) => (
          <li
            key={repo.id}
            className="flex items-center justify-between pb-8 font-semibold text-xl w-3/4"
          >
            {repo.html_url}
            <Link href={`/repos/${repo.id}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/remadex/repos");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
