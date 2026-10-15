


import {
  ArrowRight,
  ShieldCheck,
  Truck,
  SlidersHorizontal,
  Handshake,
  FileCheck2,
  ClipboardCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import { products, industries, featuredProducts } from "../data/products";
import ProductCard from "../components/ProductCard";
import Certificates from "../components/Certificates";


export default function Home() {
  return (
    <div className="home">
      {/* 1. Hero: text over a moving molecule background */}
      <section className="hero">
        <div className="hero__background" aria-hidden="true">
          <svg
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMaxYMid slice"
            focusable="false"
          >
            <defs>
              <radialGradient id="sphere-sage" cx="34%" cy="30%" r="72%">
                <stop offset="0%" style={{ stopColor: "var(--white)", stopOpacity: 0.95 }} />
                <stop offset="45%" style={{ stopColor: "var(--sage)", stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: "var(--forest)", stopOpacity: 0.4 }} />
              </radialGradient>
              <radialGradient id="sphere-copper" cx="34%" cy="30%" r="72%">
                <stop offset="0%" style={{ stopColor: "var(--white)", stopOpacity: 0.9 }} />
                <stop offset="45%" style={{ stopColor: "var(--copper)", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "var(--forest)", stopOpacity: 0.35 }} />
              </radialGradient>
            </defs>

            {/* Main cluster */}
            <g className="hero-molecule hero-molecule--a">
              <line x1="710" y1="170" x2="840" y2="300" />
              <line x1="840" y1="300" x2="1000" y2="200" />
              <line x1="840" y1="300" x2="950" y2="440" />
              <line x1="840" y1="300" x2="760" y2="440" />
              <line x1="950" y1="440" x2="1040" y2="360" />
              <circle cx="710" cy="170" r="34" />
              <circle cx="840" cy="300" r="58" />
              <circle cx="1000" cy="200" r="30" />
              <circle cx="950" cy="440" r="42" className="is-accent" />
              <circle cx="760" cy="440" r="26" />
              <circle cx="1040" cy="360" r="22" />
            </g>

            {/* Lower cluster */}
            <g className="hero-molecule hero-molecule--b">
              <line x1="620" y1="590" x2="700" y2="640" />
              <line x1="700" y1="640" x2="800" y2="600" />
              <circle cx="620" cy="590" r="20" />
              <circle cx="700" cy="640" r="28" className="is-accent" />
              <circle cx="800" cy="600" r="16" />
            </g>

            {/* Small top-right pair */}
            <g className="hero-molecule hero-molecule--c">
              <line x1="1060" y1="90" x2="1110" y2="145" />
              <circle cx="1060" cy="90" r="16" />
              <circle cx="1110" cy="145" r="11" className="is-accent" />
            </g>

            {/* Drifting particles */}
            <g className="hero-particles">
              <circle cx="560" cy="120" r="4" style={{ animationDelay: "-1s" }} />
              <circle cx="980" cy="60" r="5" style={{ animationDelay: "-4s" }} />
              <circle cx="1130" cy="260" r="4" style={{ animationDelay: "-7s" }} />
              <circle cx="1150" cy="470" r="5" style={{ animationDelay: "-2s" }} />
              <circle cx="880" cy="560" r="4" style={{ animationDelay: "-5s" }} />
              <circle cx="1060" cy="600" r="3" style={{ animationDelay: "-8s" }} />
              <circle cx="600" cy="300" r="3" style={{ animationDelay: "-3s" }} />
              <circle cx="930" cy="140" r="4" style={{ animationDelay: "-6s" }} />
            </g>
          </svg>
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">Healthcare · Pharmaceutical · Food Industries</p>

            <h1 className="hero__title">
              Delivering Trusted Solutions for 
              <span> Healthcare, Pharma & Food </span>
              
              Industries
            </h1>

            <p className="hero__description">
             Maruti Chemicals is a leading supplier of specialized industrial and healthcare products — helping pharmaceutical manufacturers, food processors, hospitals, and laboratories maintain safety, sterility, compliance, and operational efficiency.
            </p>

            <div className="hero__actions">
              <Link to="/products" className="button button--primary">
                Explore Products
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link to="/contact" className="button button--secondary">
                Contact Our Team
              </Link>
            </div>

            <p className="hero__note">
              Wholesale supply for businesses and institutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Featured Products: products come first */}
      <section className="featured-products section">
        <div className="container">
          <div className="featured-products__header">
            <div>
              <p className="eyebrow">OUR PRODUCT RANGE</p>
              <h2>Featured Supply Options</h2>
              <p className="featured-products__description">
                A selection from our range, supplied wholesale to
                businesses. Grade, specifications and pricing are confirmed
                on enquiry.
              </p>
            </div>

            <Link to="/products" className="text-link">
              View all {products.length} products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="featured-products__filters">
            <span className="featured-products__filters-label">
              Browse by industry:
            </span>
            {industries.map((industry) => (
              <Link
                key={industry}
                to={`/products?industry=${encodeURIComponent(industry)}`}
                className="product-filter"
              >
                {industry}
                <span className="product-filter__count">
                  {products.filter((p) => p.industries.includes(industry)).length}
                </span>
              </Link>
            ))}
          </div>

          <div className="featured-products__grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="featured-products__footer">
            <Link to="/products" className="button button--primary">
              Explore All Products
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Industries */}
      <section className="industries-preview section">
        <div className="container">
          <div className="industries-preview__header">
            <div>
              <p className="eyebrow">INDUSTRIES WE SERVE</p>
              <h2>Supporting Diverse Industry Needs</h2>
            </div>

            <p className="industries-preview__description">
              Explore the sectors we aim to support with dependable chemical
              supply and service.
            </p>
          </div>

          <div className="industries-preview__grid">
            <article className="industry-card">
              <div className="industry-card__number">01</div>
              <h3>Pharmaceutical Industry</h3>
              <p>
                Chemical supply for pharmaceutical operations and related
                production requirements.
              </p>
              <Link to="/industries/pharmaceutical" className="text-link">
                Explore Industry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>

            <article className="industry-card">
              <div className="industry-card__number">02</div>
              <h3>Food Industry</h3>
              <p>
                Supporting food-processing businesses with products suited to
                their specified operational needs.
              </p>
              <Link to="/industries/food" className="text-link">
                Explore Industry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>

            <article className="industry-card">
              <div className="industry-card__number">03</div>
              <h3>Hospitals &amp; Healthcare</h3>
              <p>
                Chemical supply for healthcare facilities, laboratories and
                related institutional requirements.
              </p>
              <Link to="/industries/healthcare" className="text-link">
                Explore Industry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>
          </div>

          <div className="industries-preview__footer">
            <Link to="/industries" className="button button--primary">
              View All Industries
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Company introduction */}
      <section className="company-intro section">
        <div className="container company-intro__inner">
          <div className="company-intro__heading">
            <p className="eyebrow">ABOUT MARUTI CHEMICALS</p>
            <h2>A Reliable Partner for Your Chemical Supply Needs</h2>
          </div>

          <div className="company-intro__content">
            <p>
              Every industry depends on reliable materials and consistent
              supply. Maruti Chemicals aims to support businesses and
              institutions with chemical products suited to their
              operational requirements.
            </p>

            <p>
              Our approach focuses on product quality, dependable service
              and building lasting relationships with customers across
              different sectors.
            </p>

            <Link to="/about" className="text-link">
              Learn More About Us
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="why-choose-us section">
        <div className="container">
          <div className="why-choose-us__header">
            <p className="eyebrow">WHY MARUTI CHEMICALS</p>
            <h2>Built Around Your Supply Requirements</h2>
            <p className="why-choose-us__intro">
              Reliable supply is about more than products. It is about
              understanding requirements, communicating clearly and building
              relationships that last.
            </p>
          </div>

          <div className="why-choose-us__grid">
            <article className="benefit-card">
              <div className="benefit-card__icon">
                <ShieldCheck size={26} aria-hidden="true" />
              </div>
              <h3>Quality Focus</h3>
              <p>
                Product selection guided by the required grade,
                specifications and intended application.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-card__icon">
                <Truck size={26} aria-hidden="true" />
              </div>
              <h3>Dependable Supply</h3>
              <p>
                Clear communication around product availability, order
                requirements and delivery expectations.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-card__icon">
                <SlidersHorizontal size={26} aria-hidden="true" />
              </div>
              <h3>Industry-Aware Service</h3>
              <p>
                Attention to the specific product requirements of different
                industries and institutions.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-card__icon">
                <Handshake size={26} aria-hidden="true" />
              </div>
              <h3>Long-Term Relationships</h3>
              <p>
                A customer-focused approach built on transparency,
                responsive communication and trust.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Quality & Documentation */}
      <section className="quality-section section">
        <div className="container quality-section__inner">
          <div className="quality-section__content">
            <p className="eyebrow">QUALITY &amp; DOCUMENTATION</p>

            <h2>Clear Specifications. Informed Decisions.</h2>

            <p className="quality-section__description">
              Choosing the right chemical starts with understanding the
              required grade, intended application and relevant product
              documentation. We aim to make these requirements an important
              part of the enquiry process.
            </p>

            <Link to="/contact" className="button button--primary">
              Discuss Your Requirements
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="quality-section__points">
            <article className="quality-point">
              <div className="quality-point__icon">
                <FileCheck2 size={24} aria-hidden="true" />
              </div>
              <div>
                <h3>Product Specifications</h3>
                <p>
                  Identify the grade, concentration and specifications
                  relevant to your requirements.
                </p>
              </div>
            </article>

            <article className="quality-point">
              <div className="quality-point__icon">
                <ClipboardCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h3>Documentation Requirements</h3>
                <p>
                  Discuss applicable technical documents and supporting
                  records during the enquiry process.
                </p>
              </div>
            </article>

            <article className="quality-point">
              <div className="quality-point__icon">
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <div>
                <h3>Application Awareness</h3>
                <p>
                  Confirm that the proposed product grade is appropriate for
                  the intended use before placing an order.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

       
        {/* Certificates: downloadable documents */}
      <Certificates />
      {/* 7. Contact call to action */}
      <section className="contact-cta">
        <div className="container contact-cta__inner">
          <div className="contact-cta__content">
            <p className="eyebrow">LET'S WORK TOGETHER</p>

            <h2>Looking for a Reliable Chemical Supply Partner?</h2>

            <p>
              Share your product requirements with our team. We can discuss
              the relevant specifications, availability and enquiry details.
            </p>
          </div>

          <div className="contact-cta__actions">
            <Link to="/contact" className="button button--primary">
              Send an Enquiry
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <p>Let's discuss your requirements.</p>
          </div>
        </div>
      </section>
    </div>
  );
}