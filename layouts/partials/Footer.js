import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright, phone, email, address } = config.params;
  const { title } = config.site;
  return (
    <footer className="section bg-theme-dark pb-0">
      <div className="container">
        <div className="row justify-between border-b border-gray-700 pb-12">
          <div className="col-12 mb-8 lg:col-4 lg:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              {title.split("|")[0]}
            </Link>
            <p className="mt-4 text-light">
              Empowering students and beginners to excel in technology and digital skills. 
              Stay connected for the latest updates and tutorials.
            </p>
          </div>
          <div className="col-12 mb-8 lg:col-2 lg:mb-0">
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link href={menu.url} className="text-light hover:text-white transition-colors">
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 lg:col-4">
            <h4 className="mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-light">
              <li className="flex items-center">
                <span className="mr-3 text-primary">Phone:</span>
                <a href={`tel:${phone}`} className="hover:text-white">{phone}</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-primary">Email:</span>
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">Address:</span>
                <span>{address}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-8 text-center">
          {markdownify(copyright, "p", "text-light text-sm")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
