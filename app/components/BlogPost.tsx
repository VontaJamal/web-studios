import type { Post } from "@prisma/client";
import Tag from "./Tag";

export default function BlogPost({ post }: { post: Post }) {
  console.log("post", post);

  return (
    <div className="overflow-hidden rounded shadow-lg">
      <img
        className="w-full"
        src={post.image}
        alt={`${post.title} cover`}
      />
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
