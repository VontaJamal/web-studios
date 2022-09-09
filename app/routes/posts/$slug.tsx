import { marked } from "marked";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getPost } from "~/models/post.server";

import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "~/models/post.server";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData() as LoaderData;
  console.log('post', post)
  const postDate = new Date(post.createdAt)
  return (
    <main className="mx-auto max-w-4xl">
      <div className="my-6 w-full border-b-2 text-center">
        <h1 className="text-center text-3xl mb-4">{post.title}</h1>
        <p>{postDate.toDateString()}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
