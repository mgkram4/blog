import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
// import Header from "./components/Header";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}
export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const data = (await getData()) as Post[];

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <h1 className="flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <mark className="px-2 text-white bg-slate-600 rounded dark:bg-slate-500">
          Welcome!
        </mark>
      </h1>
      <div className="space-y-2 pt-4 mb-4 md:space-y-5 mt-2">
        {/* <Header /> */}
        <h1 className="flex pt-4 items-center justify-center text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Daily Feed
        </h1>
      </div>
      <div className="mx-auto">
        <ul className="grid gap-4 grid-cols-2  md:grid-cols-3 ">
          {data.map((post) => (
            <li key={post._id} className="flex py-4">
              <article className="w-full max-w-4xl mx-auto space-y-2 xl:grid xl:items-baseline xl:space-y-0 xl:w-full">
                <div className="h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <p className="text-base font-medium leading-6 text-slate-500">
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">
                      {post.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.overview}
                  </p>
                  <a
                    href={`/post/${post.slug.current}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
                  >
                    Read here
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
