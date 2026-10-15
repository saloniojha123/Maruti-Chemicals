
// import { Link } from "react-router-dom";
// import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

// export default function IndustryDetail({
//   eyebrow,
//   title,
//   description,
//   applications,
//   considerations,
//   otherIndustries,
// }) {
//   return (
//     <>
//       <section className="industry-detail-hero">
//         <div className="container industry-detail-hero__inner">
//           <Link to="/industries" className="industry-detail__back">
//             <ArrowLeft size={17} aria-hidden="true" />
//             All Industries
//           </Link>

//           <p className="eyebrow">{eyebrow}</p>
//           <h1>{title}</h1>
//           <p className="industry-detail-hero__description">
//             {description}
//           </p>

//           <Link to="/contact" className="button button--primary">
//             Discuss Your Requirements
//             <ArrowRight size={18} aria-hidden="true" />
//           </Link>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container industry-detail-layout">
//           <div className="industry-detail-main">
//             <p className="eyebrow">Application Areas</p>
//             <h2>Understanding Your Requirements</h2>
//             <p className="industry-detail-intro">
//               Product suitability depends on the intended application,
//               required grade, specifications, and applicable regulations.
//               Confirm these details before selecting or using any chemical.
//             </p>

//             <div className="industry-application-grid">
//               {applications.map((application) => (
//                 <article
//                   className="industry-application-card"
//                   key={application.title}
//                 >
//                   <span className="industry-application-card__icon">
//                     <ShieldCheck size={22} aria-hidden="true" />
//                   </span>
//                   <h3>{application.title}</h3>
//                   <p>{application.description}</p>
//                 </article>
//               ))}
//             </div>
//           </div>

//           <aside className="industry-detail-sidebar">
//             <p className="eyebrow">Before You Enquire</p>
//             <h3>Share Your Requirements</h3>
//             <p>
//               These details help clarify whether a product is suitable for
//               your intended use.
//             </p>

//             <ul>
//               {considerations.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>

//             <Link
//               to="/contact"
//               className="industry-detail-sidebar__link"
//             >
//               Contact our team
//               <ArrowRight size={17} aria-hidden="true" />
//             </Link>
//           </aside>
//         </div>
//       </section>

//       <section className="section industry-detail-related">
//         <div className="container">
//           <p className="eyebrow">Explore More</p>
//           <h2>Other Industries</h2>

//           <div className="industry-related-grid">
//             {otherIndustries.map((industry) => (
//               <Link
//                 className="industry-related-card"
//                 to={industry.path}
//                 key={industry.path}
//               >
//                 <span>{industry.title}</span>
//                 <ArrowRight size={19} aria-hidden="true" />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

export default function IndustryDetail({
  eyebrow,
  title,
  description,
  applications,
  considerations,
  otherIndustries,
}) {
  return (
    <>
      <section className="industry-detail-hero">
        <div className="container industry-detail-hero__inner">
          <nav
            className="industry-detail-hero__breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/industries" className="industry-detail__back">
              <ArrowLeft size={17} aria-hidden="true" />
              <span>All Industries</span>
            </Link>
            <span className="industry-detail__separator" aria-hidden="true">
              /
            </span>
            <span
              className="eyebrow industry-detail__current"
              aria-current="page"
            >
              {eyebrow}
            </span>
          </nav>

          <h1>{title}</h1>
          <p className="industry-detail-hero__description">
            {description}
          </p>

          <Link to="/contact" className="button button--primary">
            Discuss Your Requirements
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container industry-detail-layout">
          <div className="industry-detail-main">
            <p className="eyebrow">Application Areas</p>
            <h2>Understanding Your Requirements</h2>
            <p className="industry-detail-intro">
              Product suitability depends on the intended application,
              required grade, specifications, and applicable regulations.
              Confirm these details before selecting or using any chemical.
            </p>

            <div className="industry-application-grid">
              {applications.map((application) => (
                <article
                  className="industry-application-card"
                  key={application.title}
                >
                  <span className="industry-application-card__icon">
                    <ShieldCheck size={22} aria-hidden="true" />
                  </span>
                  <h3>{application.title}</h3>
                  <p>{application.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="industry-detail-sidebar">
            <p className="eyebrow">Before You Enquire</p>
            <h3>Share Your Requirements</h3>
            <p>
              These details help clarify whether a product is suitable for
              your intended use.
            </p>

            <ul>
              {considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="industry-detail-sidebar__link"
            >
              Contact our team
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section industry-detail-related">
        <div className="container">
          <p className="eyebrow">Explore More</p>
          <h2>Other Industries</h2>

          <div className="industry-related-grid">
            {otherIndustries.map((industry) => (
              <Link
                className="industry-related-card"
                to={industry.path}
                key={industry.path}
              >
                <span>{industry.title}</span>
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
