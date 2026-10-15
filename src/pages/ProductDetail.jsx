
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Package,
  ClipboardList,
} from "lucide-react";
import { products } from "../data/products";
import { useState } from "react";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === productId);
  const [imageFailed, setImageFailed] = useState(false);

  if (!product) {
    return (
      <section className="container section">
        <h1>Product Not Found</h1>
        <p>This product may have been removed from our catalogue.</p>
        <Link to="/products" className="button button--primary">
          Browse All Products
        </Link>
      </section>
    );
  }

  // Sample data for the design preview. Replace with company-confirmed details.
  const details = {
    grade: product.sampleGrade || "Industrial / Application-Specific",
    packaging: product.samplePackaging || "25 kg bag / 200 L drum",
    cas: product.casNumber || "To be confirmed",
    type: product.chemicalType || "Specialty Chemical",
  };

  return (
    <>
      <section className="product-detail-hero">
        <div className="container">
          <Link to="/products" className="product-detail-back">
            <ArrowLeft size={17} />
            Back to Products
          </Link>

          
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container product-detail-layout">
          <div className="product-detail-image-wrap">
            {!imageFailed && product.image ? (
              <img
                src={product.image}
                alt={`${product.name} product preview`}
                className="product-detail-image"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="product-detail-image-fallback">
                <Package size={54} strokeWidth={1.3} />
                <span>Product image preview</span>
              </div>
            )}
            <span className="product-detail-image-note">
              Sample image for design preview
            </span>
          </div>

          <div className="product-detail-content">
            <p className="eyebrow">Product Overview</p>
            <h2>About {product.name}</h2>
            <p>{product.description}</p>
            <p>
              This product is listed for buyers exploring chemical supply
              options across relevant industries. Final specifications,
              availability, and suitability must be confirmed for each enquiry.
            </p>

            <div className="product-detail-industries">
              {product.industries.map((industry) => (
                <span key={industry} className="product-detail-tag">
                  {industry}
                </span>
              ))}
            </div>

            <Link
              to={`/contact?product=${product.id}`}
              className="button button--primary product-detail-cta"
            >
              Enquire About This Product
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="container product-detail-specs-section">
          <p className="eyebrow">Product Information</p>
          <h2>Specifications at a Glance</h2>
          <p className="product-detail-disclaimer">
            Illustrative specifications only. Confirm all details with
            Maruti Chemicals before placing an order.
          </p>

          <div className="product-detail-specs">
            {[
              ["Chemical Type", details.type],
              ["Sample Grade", details.grade],
              ["Sample Packaging", details.packaging],
              ["CAS Number", details.cas],
            ].map(([label, value]) => (
              <div className="product-detail-spec" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="container product-detail-applications">
          <div>
            <p className="eyebrow">Industries Served</p>
            <h2>Potential Applications</h2>
            <p>
              Applications depend on the product grade, customer process,
              and applicable industry requirements.
            </p>
          </div>

          <div className="product-detail-application-list">
            {product.industries.map((industry) => (
              <div className="product-detail-application" key={industry}>
                <CheckCircle2 size={20} />
                <span>{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="container product-detail-enquiry-banner">
          <div>
            <ClipboardList size={28} />
            <h2>Looking for {product.name}?</h2>
            <p>
              Share your required quantity and specifications with our team.
            </p>
          </div>
          <Link
            to={`/contact?product=${product.id}`}
            className="button button--primary"
          >
            Send an Enquiry <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
