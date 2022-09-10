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
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold leading-tight tracking-tight text-custom-primary">
            {"<WebStudios />"}
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
  );
}
