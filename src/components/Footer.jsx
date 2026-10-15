import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

/*
  Add verified company contact details here when available.
  Leave values empty until the correct details are confirmed.
*/
const contact = {
  email: "",
  phone: "",
  address: "",
};

const pageLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "All Industries", to: "/industries" },
  { label: "Products", to: "/products" },
  { label: "Why Choose Us", to: "/why-us" },
  { label: "Contact Us", to: "/contact" },
];

const industryLinks = [
  {
    label: "Pharmaceutical Industry",
    to: "/industries/pharmaceutical",
  },
  {
    label: "Food Industry",
    to: "/industries/food",
  },
  {
    label: "Hospitals & Healthcare",
    to: "/industries/healthcare",
  },
];

function ContactItem({ icon: Icon, value, placeholder, href }) {
  const hasValue = Boolean(value.trim());

  return (
    <li className="footer__contact-item">
      <Icon
        size={18}
        className="footer__icon"
        aria-hidden="true"
      />

      {hasValue && href ? (
        <a href={href}>{value}</a>
      ) : hasValue ? (
        <span>{value}</span>
      ) : (
        <span className="footer__placeholder">{placeholder}</span>
      )}
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link
            to="/"
            className="footer__brand-link"
            aria-label="Maruti Chemicals home"
          >
            <span className="footer__name">Maruti Chemicals</span>
            <span className="footer__tagline">
              Quality in every connection
            </span>
          </Link>

          <p className="footer__about">
            Exploring chemical supply requirements for pharmaceutical,
            food-processing, laboratory, and healthcare applications,
            subject to product specifications and suitability.
          </p>

          <Link to="/contact" className="footer__cta">
            Discuss Your Requirements
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="footer__heading">Quick Links</h2>

          <ul className="footer__list">
            {pageLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer industries">
          <h2 className="footer__heading">Industries</h2>

          <ul className="footer__list">
            {industryLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h2 className="footer__heading">Get in Touch</h2>

          <p className="footer__contact-intro">
            Have a product or sourcing enquiry? Contact our team with
            your requirements.
          </p>

          <ul className="footer__list footer__list--contact">
            <ContactItem
              icon={Mail}
              value={contact.email}
              href={contact.email ? `mailto:${contact.email}` : undefined}
              placeholder="Company email to be added"
            />

            <ContactItem
              icon={Phone}
              value={contact.phone}
              href={
                contact.phone
                  ? `tel:${contact.phone.replace(/[^\d+]/g, "")}`
                  : undefined
              }
              placeholder="Phone number to be added"
            />

            <ContactItem
              icon={MapPin}
              value={contact.address}
              placeholder="Business address to be added"
            />
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {currentYear} Maruti Chemicals. All rights reserved.
          </p>

          <Link to="/contact" className="footer__bottom-link">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}