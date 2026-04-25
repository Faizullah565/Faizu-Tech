import Social from "@components/Social";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import MDXContent from "./partials/MDXContent";

const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, image, social } = frontmatter;

  return (
    <section className="section">
      <div className="container text-center">
        {image && (
          <div className="mb-12 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image}
              width={1200}
              height={600}
              alt={title}
              priority
              className="w-full object-cover"
            />
          </div>
        )}
        {markdownify(title, "h1", "h2")}
        <Social source={social} className="social-icons-simple my-8" />

        <div className="content">
          <MDXContent content={content} />
        </div>
      </div>
    </section>
  );
};

export default About;
