import type { Post } from "@prisma/client";
import Tag from "./Tag";

export default function BlogPost({ post }: { post: Post }) {
  console.log("post", post);

  return (
    <div className=" rounded shadow-lg transition-all ease-in-out hover:border-2 hover:border-red-700 relative">
      <img
        height={40}
        width={40}
        className="inline absolute -left-4 -top-14"
        src="/assets/zidanedaggers.svg"
        alt="zidaneee"
      />
      <img
        height={40}
        width={40}
        className="inline absolute -right-4 -bottom-14"
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
