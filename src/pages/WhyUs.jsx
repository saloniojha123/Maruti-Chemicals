
import {
  ShieldCheck,
  Truck,
  Handshake,
  FileCheck2,
  Target,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const strengths = [
  {
    icon: ShieldCheck,
    title: "Quality-Conscious Approach",
    description:
      "Product selection should match the required grade, specifications, intended application, and relevant quality requirements.",
  },
  {
    icon: Truck,
    title: "Supply Coordination",
    description:
      "Clear communication about quantities, availability, packaging, and delivery expectations helps support smoother procurement.",
  },
  {
    icon: Handshake,
    title: "Customer-Focused Service",
    description:
      "Understanding each customer's requirements helps identify suitable products and clarify purchasing details.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Awareness",
    description:
      "Relevant product specifications and safety documentation can be discussed according to the product and customer requirements.",
  },
  {
    icon: Target,
    title: "Requirement-Based Sourcing",
    description:
      "Product enquiries can be assessed using the chemical name, grade, quantity, and intended application provided by the customer.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Transparent discussions about specifications, availability, and order requirements help set clear expectations.",
  },
];

export default function WhyUs() {
  return (
    <>
      <section className="why-page-hero">
        <div className="container why-page-hero__inner">
          <p className="eyebrow">Why Maruti Chemicals</p>
          <h1>A Thoughtful Approach to Chemical Supply</h1>
          <p>
            Chemical procurement requires more than finding a product.
            Specifications, suitability, documentation, and clear
            communication all matter.
          </p>

          <Link to="/contact" className="button button--primary">
            Discuss Your Requirements
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="why-page-heading">
            <p className="eyebrow">Our Approach</p>
            <h2>What Matters in Every Enquiry</h2>
            <p>
              We focus on the practical details that help customers assess
              their chemical supply requirements.
            </p>
          </div>

          <div className="why-page-grid">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article className="why-page-card" key={strength.title}>
                  <div className="why-page-card__icon">
                    <Icon size={25} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why-page-process">
        <div className="container why-page-process__layout">
          <div>
            <p className="eyebrow">A Clear Process</p>
            <h2>From Enquiry to Order</h2>
            <p>
              Providing the right details at the start helps make product
              discussions more precise and efficient.
            </p>
          </div>

          <ol className="why-page-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Share Your Requirement</h3>
                <p>Provide the product name, grade, quantity, and intended use.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Confirm Specifications</h3>
                <p>Discuss suitability, documentation, packaging, and availability.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Coordinate the Order</h3>
                <p>Confirm commercial details and delivery expectations before proceeding.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container why-page-cta">
          <p className="eyebrow">Let's Connect</p>
          <h2>Have a Chemical Supply Requirement?</h2>
          <p>
            Share the details of your requirement so the relevant product
            specifications and availability can be discussed.
          </p>
          <Link to="/contact" className="button button--primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
