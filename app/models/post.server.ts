import { prisma } from "~/db.server";

export type Post = {
  slug: string;
  title: string;
  markdown: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
};

export async function getPosts() {
  return prisma.post.findMany();
}

export async function getPost(slug: string): Promise<Post> {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<Post, "slug" | "title" | "markdown">
) {
  return prisma.post.create({ data: post });
}
