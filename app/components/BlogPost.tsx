import { useState } from "react";
import type { Post } from "~/models/post.server";
import Tag from "./Tag";

export default function BlogPost({ post }: { post: Post }) {
  console.log("post", post);

  const [showDaggers, setShowDaggers] = useState(false);

  const handleMouse = () => setShowDaggers((showing) => !showing);

  return (
    <div
      className="relative h-full scale-95 rounded bg-white shadow-lg shadow-custom-primary transition-all ease-in-out hover:scale-100"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
    >
      <img
        height={40}
        width={40}
        className={`absolute -left-2 -top-12 inline transition-all ${
          showDaggers ? "rotate-45 opacity-100" : "opacity-0"
        }`}
        src="/assets/zidanedaggers.svg"
        alt="zidaneee"
      />
      <img
        height={40}
        width={40}
        className={`absolute -right-2 -bottom-12 inline transition-all ${
          showDaggers ? "rotate-45 opacity-100" : "opacity-0"
        }`}
        src="/assets/zidanedaggers.svg"
        alt="zidaneee"
      />
      <img className="w-full" src={post.image} alt={`${post.title} cover`} />
      <div className="px-6 py-4">
        <div className="mb-2 text-2xl font-bold text-black">{post.title}</div>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
