import Share from "@components/Share";
import AdSense from "@components/AdSense";
import dateFormat from "@lib/utils/dateFormat";
import readingTime from "@lib/utils/readingTime";
import similerItems from "@lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@lib/utils/textConverter";
import SimilarPosts from "@partials/SimilarPosts";
import Image from "next/image";
import Link from "next/link";
import MDXContent from "./partials/MDXContent";

const PostSingle = ({ post, posts, authors, slug }) => {
  const { frontmatter, content } = post;
  let { description, title, date, image, categories, tags } = frontmatter;
  description = description ? description : content.slice(0, 120);
  const similarPosts = similerItems(post, posts, slug);

  return (
    <>
      <section className="section">
        <div className="container">
          <article>
            <div className="mb-8 text-left">
              {markdownify(title, "h1", "h2 mb-4")}
              <ul className="flex flex-wrap items-center justify-start space-x-4 text-sm font-medium text-light">
                <li className="flex items-center">
                  {authors
                    .filter((author) =>
                      frontmatter.authors
                        .map((author) => slugify(author))
                        .includes(slugify(author.frontmatter.title))
                    )
                    .map((author, i) => (
                      <Link
                        href={`/authors/${slugify(author.frontmatter.title)}`}
                        key={`author-${i}`}
                        className="flex items-center hover:text-primary"
                      >
                        {author.frontmatter.image && (
                          <Image
                            src={author.frontmatter.image}
                            alt={author.frontmatter.title}
                            height={40}
                            width={40}
                            className="mr-2 h-8 w-8 rounded-full border border-border"
                          />
                        )}
                        <span>{author.frontmatter.title}</span>
                      </Link>
                    ))}
                </li>
                <li>{dateFormat(date)}</li>
                <li>{readingTime(content)}</li>
                <li>
                  <ul className="flex space-x-2">
                    {categories.map((category, i) => (
                      <li className="inline-block" key={`category-${i}`}>
                        <Link
                          href={`/categories/${slugify(category)}`}
                          className="rounded bg-theme-light px-2 py-1 text-primary hover:bg-primary hover:text-white"
                        >
                          {humanize(category)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            <AdSense slot="header-top" className="mb-8" />

            <div className="row">
              {/* Main Content Area */}
              <div className="col-12 lg:col-8">
                {image && (
                  <div className="mb-12 overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={image}
                      height={500}
                      width={1000}
                      alt={title}
                      layout="responsive"
                      className="object-cover"
                    />
                  </div>
                )}

                <AdSense slot="content-top" className="mb-8" />

                <div className="content mb-16">
                  <MDXContent content={content} />
                </div>

                <AdSense slot="article-bottom" className="mb-12" />

                <div className="flex flex-wrap items-center justify-between border-t border-border pt-8">
                  <ul className="mb-4 mr-4 flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <li key={`tag-${i}`}>
                        <Link
                          href={`/tags/${slugify(tag)}`}
                          className="block rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-dark hover:bg-primary hover:text-white"
                        >
                          #{humanize(tag)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Share
                    className="social-share mb-4"
                    title={title}
                    description={description}
                    slug={slug}
                  />
                </div>
              </div>

              {/* Sidebar Area */}
              <aside className="col-12 lg:col-4">
                <div className="sticky top-24 pl-0 lg:pl-8">
                  {/* Sidebar Ad */}
                  <div className="mb-12">
                    <h5 className="mb-4 text-xs font-bold uppercase tracking-widest text-light">Sponsored</h5>
                    <AdSense slot="sidebar-top" format="sidebar" />
                  </div>

                  {/* Categories Widget */}
                  <div className="mb-12 rounded-xl border border-border p-6 shadow-sm">
                    <h4 className="mb-6 border-b-2 border-primary pb-2 text-navy-blue">Categories</h4>
                    <ul className="space-y-3">
                      {categories.map((category, i) => (
                        <li key={i}>
                          <Link
                            href={`/categories/${slugify(category)}`}
                            className="flex items-center justify-between font-medium text-dark hover:text-primary transition-colors"
                          >
                            <span>{humanize(category)}</span>
                            <span className="text-xs text-light">&rarr;</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sidebar Ad 2 */}
                  <div className="mb-12">
                    <AdSense slot="sidebar-bottom" format="square" />
                  </div>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>
      {similarPosts && similarPosts.length > 0 && (
        <section className="section bg-theme-light">
          <div className="container">
            <h2 className="mb-12 text-left text-navy-blue">Related Posts</h2>
            <SimilarPosts posts={similarPosts.slice(0, 3)} />
          </div>
        </section>
      )}
    </>
  );
};

export default PostSingle;
