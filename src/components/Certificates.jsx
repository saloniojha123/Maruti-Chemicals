import { Link } from "react-router-dom";
import { ArrowRight, Download, FileText } from "lucide-react";
import certificates from "../data/certificates";

export default function Certificates() {
  const hasCertificates = certificates.length > 0;

  return (
    <section
      className="certificates section"
      aria-labelledby="certificates-heading"
    >
      <div className="container">
        <div className="certificates__header">
          <p className="eyebrow">QUALITY &amp; COMPLIANCE</p>
          <h2 id="certificates-heading">Certificates &amp; Documents</h2>
          <p>
            {hasCertificates
              ? "Copies of our certificates and supporting documents, available for your supplier records and approval process."
              : "Our certificates and quality documents will be listed here. If you need a specific document for supplier approval, please contact our team."}
          </p>
        </div>

        {hasCertificates ? (
          <ul className="certificates__grid">
            {certificates.map((certificate) => (
              <li key={certificate.id} className="certificate-card">
                <span className="certificate-card__icon">
                  <FileText size={26} aria-hidden="true" />
                </span>

                <h3>{certificate.title}</h3>

                {certificate.issuer && (
                  <p className="certificate-card__meta">
                    Issued by {certificate.issuer}
                  </p>
                )}

                {certificate.validUntil && (
                  <p className="certificate-card__meta">
                    Valid until {certificate.validUntil}
                  </p>
                )}

                {certificate.description && (
                  <p className="certificate-card__description">
                    {certificate.description}
                  </p>
                )}

                <a
                  href={certificate.file}
                  download
                  className="button button--secondary certificate-card__download"
                  aria-label={`Download ${certificate.title} (PDF)`}
                >
                  <Download size={18} aria-hidden="true" />
                  Download PDF
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="certificates__empty">
            <FileText size={36} aria-hidden="true" />
            <p>
              Documents are being prepared for this section. If you need one
              for supplier approval, tell us what you need.
            </p>
            <Link to="/contact" className="button button--primary">
              Contact Our Team
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}