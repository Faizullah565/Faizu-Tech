import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;
  const { contact_form_action, phone, email, address } = config.params;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "h2 mb-12 text-left text-navy-blue")}
        <div className="row justify-center gap-12">
          <div className="col-12 lg:col-4 mb-12 lg:mb-0">
            <div className="rounded-2xl bg-theme-light p-8 shadow-sm">
              <h3 className="mb-6 text-navy-blue">Contact Information</h3>
              <ul className="space-y-6">
                <li>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">Phone</p>
                  <a href={`tel:${phone}`} className="text-lg font-medium text-dark hover:text-primary transition-colors">{phone}</a>
                </li>
                <li>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">Email</p>
                  <a href={`mailto:${email}`} className="text-lg font-medium text-dark hover:text-primary transition-colors">{email}</a>
                </li>
                <li>
                  <p className="text-sm font-bold uppercase tracking-wider text-primary">Location</p>
                  <span className="text-lg font-medium text-dark">{address}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 lg:col-6">
            <form
              className="contact-form rounded-2xl border border-border p-8 shadow-sm"
              method="POST"
              action={contact_form_action}
            >
              <div className="mb-6">
                <label className="mb-2 block font-semibold text-dark" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="form-input w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-semibold text-dark" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form-input w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block font-semibold text-dark" htmlFor="message">
                  Your Message
                </label>
                <textarea 
                  className="form-textarea w-full rounded-lg border-gray-300 focus:ring-primary focus:border-primary" 
                  rows="5" 
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <button className="btn btn-primary w-full py-4 font-bold shadow-md hover:shadow-lg transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
