import Pagination from "@components/Pagination";
import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import Posts from "@partials/Posts";
const { blog_folder } = config.settings;

// blog listing
const BlogListing = async () => {
  const { pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const authors = await getSinglePage("content/authors");
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(0, pagination);

  return (
    <>
      <SeoMeta title="Blog" />
      <section className="section">
        <div className="container">
          <h1 className="h2 mb-12 text-center text-navy-blue">All Blog Posts</h1>
          <Posts className="mb-16" posts={currentPosts} authors={authors} />
          <Pagination totalPages={totalPages} currentPage={1} basePath="blog" />
        </div>
      </section>
    </>
  );
};

export default BlogListing;
