import config from "@config/config.json";
import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
const { blog_folder } = config.settings;

import NotFound from "@layouts/404";

// post single page
const Post = async ({ params }) => {
  const { slug } = params;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const post = posts.filter((p) => p.slug === slug)[0];
  const authors = await getSinglePage("content/authors");

  if (!post) {
    return <NotFound />;
  }

  return (
    <PostSingle
      slug={slug}
      post={post}
      authors={authors}
      posts={posts}
    />
  );
};

export default Post;

// get post single slugs
export async function generateStaticParams() {
  const posts = await getSinglePage(`content/${blog_folder}`);
  const paths = posts.map((post) => ({
    slug: post.slug,
  }));

  return paths;
}
