
import { FileText, Download, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const documents = [
  {
    id: 1,
    title: "Quality Certificates",
    description:
      "Download verified quality certificates provided by Maruti Chemicals.",
    file: "/documents/quality-certificate.pdf",
    type: "PDF Document",
  },
  {
    id: 2,
    title: "Product Specifications",
    description:
      "Review product specifications and technical details for available products.",
    file: "/documents/product-specifications.pdf",
    type: "PDF Document",
  },
  {
    id: 3,
    title: "Safety Data Sheets",
    description:
      "Access safety information and handling guidance for applicable products.",
    file: "/documents/safety-data-sheet.pdf",
    type: "PDF Document",
  },
];

export default function Documents() {
  return (
    <main className="documents-page">
      <section className="documents-hero">
        <div className="container">
          <p className="eyebrow">Resources & Downloads</p>

          <h1>Certifications & Documents</h1>

          <p className="documents-hero__description">
            Find product documentation, quality certificates, and relevant
            technical resources in one place.
          </p>

          <a href="#available-documents" className="button">
            Explore Documents
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="documents-section section"
        id="available-documents"
      >
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Document Library</p>
            <h2>Available Resources</h2>
            <p>
              Download the documents relevant to your product and application.
            </p>
          </div>

          <div className="documents-grid">
            {documents.map((document) => (
              <article className="document-card" key={document.id}>
                <div className="document-card__icon">
                  <FileText size={28} aria-hidden="true" />
                </div>

                <p className="document-card__type">{document.type}</p>

                <h3>{document.title}</h3>

                <p className="document-card__description">
                  {document.description}
                </p>

                <a
                  href={document.file}
                  download
                  className="document-card__download"
                >
                  <Download size={18} aria-hidden="true" />
                  Download PDF
                </a>
              </article>
            ))}
          </div>

          <div className="documents-note">
            <ShieldCheck size={22} aria-hidden="true" />
            <p>
              Please verify that each document is current and applicable to
              the relevant product before relying on it.
            </p>
          </div>

          <div className="documents-contact">
            <h2>Need a specific document?</h2>
            <p>
              Contact our team to enquire about documentation for your
              product requirements.
            </p>
            <Link to="/contact" className="button">
              Contact Us
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
