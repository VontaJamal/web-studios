import { json } from "@remix-run/node";
import { marked } from "marked";
import invariant from "tiny-invariant";
import { getPost } from "~/models/post.server";
import type { Post } from "~/models/post.server";
import type { LoaderFunction } from "@remix-run/node";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};
