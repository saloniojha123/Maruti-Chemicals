import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";

export default function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = product.image && !imageFailed;

  return (
    <article className="product-card">
      {/* 1. Image */}
      <div
        className={`product-card__image-wrap${hasImage ? "" : " is-placeholder"}`}
      >
        {hasImage ? (
          <img
            className="product-card__image"
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="product-card__image-fallback" aria-hidden="true">
            <Package size={40} strokeWidth={1.3} />
            <span>Image coming soon</span>
          </div>
        )}
      </div>

      <div className="product-card__content">
        {/* 2. Name */}
        <h3 className="product-card__name">{product.name}</h3>

        {/* 3. About the product */}
        <p className="product-card__description">{product.description}</p>

        {/* 4. Enquiry: opens Contact with this product filled in */}
        <Link
          to={`/contact?product=${product.id}`}
          className="button button--primary product-card__enquiry"
          aria-label={`Enquire about ${product.name}`}
        >
          Enquiry
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}