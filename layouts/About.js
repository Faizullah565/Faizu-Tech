import Social from "@components/Social";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import MDXContent from "./partials/MDXContent";

const About = ({ data }) => {
  const { frontmatter, content } = data;
  const { title, image, social } = frontmatter;

  return (
    <section className="section px-0 pb-0">
      {image && (
        <div className="mb-12 w-full overflow-hidden shadow-lg">
          <Image
            src={image}
            width={1920}
            height={700}
            alt={title}
            priority
            className="w-full h-auto object-cover max-h-[600px]"
          />
        </div>
      )}
      <div className="container text-left">
        <div className="text-center">
          {markdownify(title, "h1", "h2")}
          <Social source={social} className="social-icons-simple my-8" />
        </div>

        <div className="content mx-auto max-w-[800px]">
          <MDXContent content={content} />
        </div>
      </div>
    </section>
  );
};

export default About;
