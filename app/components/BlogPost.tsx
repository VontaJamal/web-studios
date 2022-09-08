import type { Post } from "~/models/post.server";
import Tag from "./Tag";

export default function BlogPost({ post }: { post: Post }) {
  console.log("post", post);

  return (
    <div className=" relative rounded shadow-lg transition-all ease-in-out hover:border-2 hover:border-red-700">
      <img
        height={40}
        width={40}
        className="absolute -left-4 -top-14 inline"
        src="/assets/zidanedaggers.svg"
        alt="zidaneee"
      />
      <img
        height={40}
        width={40}
        className="absolute -right-4 -bottom-14 inline"
        src="/assets/zidanedaggers.svg"
        alt="zidaneee"
      />
      <img className="w-full" src={post.image} alt={`${post.title} cover`} />
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold">{post.title}</div>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
