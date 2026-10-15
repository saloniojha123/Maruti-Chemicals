
import { ShieldCheck, Truck, Handshake, Target } from "lucide-react";


const values = [
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    description:
      "We emphasize product quality and clear specifications to help customers make informed purchasing decisions.",
  },
  {
    icon: Truck,
    title: "Dependable Supply",
    description:
      "We aim to support customer operations through dependable coordination and supply planning.",
  },
  {
    icon: Handshake,
    title: "Customer Relationships",
    description:
      "We value transparent communication, responsive support, and long-term business relationships.",
  },
  {
    icon: Target,
    title: "Industry Understanding",
    description:
      "We recognize that different industries have different requirements for chemical products and their applications.",
  },
];

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__inner">
          <p className="eyebrow">About Maruti Chemicals</p>

          <h1>
            Building Trust Through
            <span> Reliable Chemical Supply.</span>
          </h1>

          <p className="about-hero__description">
            Maruti Chemicals aims to support businesses with chemical supply
            solutions focused on quality, dependable service, and lasting
            customer relationships.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-story">
          <div className="about-story__content">
            <p className="eyebrow">Who We Are</p>
            <h2>A Customer-Focused Chemical Supply Partner</h2>

            <p>
              Chemical requirements vary across pharmaceutical production,
              food processing, healthcare, and laboratory environments.
              Choosing suitable products and specifications is an important
              part of supporting these operations.
            </p>

            <p>
              Maruti Chemicals seeks to make the sourcing process more
              straightforward through clear communication, attention to
              requirements, and a focus on dependable customer service.
            </p>
          </div>

          <div className="about-story__panel">
            <span className="about-story__panel-label">
              Our Approach
            </span>
            <h3>Reliable service. Clear communication. Lasting relationships.</h3>
            <p>
              We aim to understand each customer's requirements and support
              them with suitable chemical supply solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="about-proof" aria-label="Company at a glance">
        <div className="container about-proof__inner">
          <div className="about-proof__intro">
            <p className="eyebrow">TRUSTED AT SCALE</p>
            <h2>Experience built around dependable supply.</h2>
          </div>
          <dl className="about-proof__stats">
            <div className="about-proof__stat">
              <dt>Years of Industry Experience</dt>
              <dd>10<span>+</span></dd>
            </div>
            <div className="about-proof__stat">
              <dt>Sectors Served</dt>
              <dd>5</dd>
            </div>
            <div className="about-proof__stat">
              <dt>Customers Across India</dt>
              <dd>250<span>+</span></dd>
            </div>
            <div className="about-proof__stat">
              <dt>Product Categories</dt>
              <dd>20<span>+</span></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <div className="about-values__heading">
            <p className="eyebrow">What Guides Us</p>
            <h2>Our Core Values</h2>
            <p>
              The principles that shape how we approach our customers and
              their requirements.
            </p>
          </div>

          <div className="about-values__grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-card__icon">
                    <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
