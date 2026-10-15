
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  FlaskConical,
  Utensils,
  HeartPulse,
} from "lucide-react";

const industries = [
  {
    icon: FlaskConical,
    number: "01",
    title: "Pharmaceutical Industry",
    description:
      "Chemical sourcing for pharmaceutical and related production requirements, subject to product grade and specifications.",
    path: "/industries/pharmaceutical",
    label: "Explore pharmaceutical",
  },
  {
    icon: Utensils,
    number: "02",
    title: "Food Industry",
    description:
      "Chemical products for suitable food-processing applications, with selection guided by the required grade and intended use.",
    path: "/industries/food",
    label: "Explore food industry",
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Hospitals & Healthcare",
    description:
      "Chemical supply for relevant healthcare and facility requirements, depending on product specifications and intended application.",
    path: "/industries/healthcare",
    label: "Explore healthcare",
  },
];

export default function Industries() {
  return (
    <>
      <section className="industries-hero">
        <div className="container industries-hero__inner">
          <p className="eyebrow">Industries We Serve</p>
          <h1>Chemical Supply for Diverse Industry Needs</h1>
          <p>
            Different industries have different requirements. We aim to help
            customers identify suitable chemical supply options based on
            their intended applications and specifications.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="industries-page__heading">
            <p className="eyebrow">Our Industry Focus</p>
            <h2>Supporting Essential Sectors</h2>
            <p>
              Explore the industries and application areas relevant to our
              chemical supply offering.
            </p>
          </div>

          <div className="industries-page__grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article
                  className="industry-detail-card"
                  key={industry.path}
                >
                  <div className="industry-detail-card__top">
                    <span className="industry-detail-card__number">
                      {industry.number}
                    </span>
                    <div className="industry-detail-card__icon">
                      <Icon
                        size={28}
                        strokeWidth={1.7}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>

                  <Link
                    className="industry-detail-card__link"
                    to={industry.path}
                  >
                    {industry.label}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
