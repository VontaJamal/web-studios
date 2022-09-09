import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import BlogPost from "~/components/BlogPost";
import { getPosts } from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Index() {
  const { posts } = useLoaderData() as LoaderData;
  console.log("posts", posts);

  return (
    <div className="min-h-full">
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt="Workflow"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <button
                  className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  aria-current="page"
                >
                  Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Web Studios
            </h1>
            <h3 className="mt-3 mb-8 text-center font-semibold leading-tight">
              Web Development, Investing, and Career Tips!
            </h3>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}

            <ul className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} to={`/posts/${post.slug}`}>
                  <BlogPost post={post} />
                </Link>
              ))}
            </ul>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </div>
    </div>
  );
}
