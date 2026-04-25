import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getSinglePage } from "@lib/contentParser";
import Posts from "@partials/Posts";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@lib/utils/textConverter";

const Home = async () => {
  const { blog_folder, pagination } = config.settings;
  const posts = await getSinglePage(`content/${blog_folder}`);
  const authors = await getSinglePage("content/authors");
  const featuredPosts = posts.filter((post) => post.frontmatter.featured);
  const latestPosts = posts.slice(0, pagination);
  const categories = posts.map((post) => post.frontmatter.categories).flat();
  const uniqueCategories = [...new Set(categories)];

  return (
    <>
      <SeoMeta />
      
      {/* Hero Section */}
      <section className="section bg-theme-light pb-0">
        <div className="container">
          <div className="row items-center justify-center text-center">
            <div className="col-12 lg:col-10">
              <div className="mb-12 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/ft-hero.png"
                  width={1200}
                  height={500}
                  alt="Faizu-Tech Hero"
                  priority
                  className="w-full object-cover"
                />
              </div>
              <h1 className="mb-4 text-navy-blue">Welcome to <span className="text-primary">Faizu-Tech</span></h1>
              <p className="mb-8 text-lg mx-auto max-w-[600px]">
                Your ultimate destination for learning AI Tools, Web Development, and Online Earning. 
                Our mission is to empower you to succeed in the digital world.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/blog" className="btn btn-primary">Browse Blog</Link>
                <Link href="/about" className="btn btn-outline-primary">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="section pb-0">
          <div className="container text-left">
            <h2 className="mb-8 text-navy-blue border-b-4 border-accent inline-block pb-2">Featured Posts</h2>
            <Posts posts={featuredPosts} authors={authors} />
          </div>
        </section>
      )}

      {/* Latest Posts */}
      <section className="section">
        <div className="container text-left">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-navy-blue">Latest Blog Posts</h2>
            <Link href="/blog" className="text-primary font-semibold hover:underline">View All &rarr;</Link>
          </div>
          <Posts posts={latestPosts} authors={authors} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-theme-light">
        <div className="container text-center">
          <h2 className="mb-12 text-navy-blue">Explore by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {uniqueCategories.map((category, i) => (
              <Link
                key={i}
                href={`/categories/${slugify(category)}`}
                className="rounded-xl bg-white px-6 py-3 text-base md:text-lg font-bold text-navy-blue shadow-sm transition-all hover:bg-primary hover:text-white hover:shadow-lg"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Placeholder */}
      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-navy-blue p-8 md:p-12 text-center text-white shadow-xl">
            <h2 className="mb-4 text-white">Subscribe to Newsletter</h2>
            <p className="mb-8 opacity-80 max-w-[600px] mx-auto">Be the first to get latest tech news and online earning tips in your inbox.</p>
            <form className="mx-auto flex max-w-[500px] flex-col gap-4 sm:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-lg border-none px-4 py-3 text-dark focus:ring-2 focus:ring-cyan" 
                required
              />
              <button type="submit" className="rounded-lg bg-primary px-8 py-3 font-bold hover:bg-cyan-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
