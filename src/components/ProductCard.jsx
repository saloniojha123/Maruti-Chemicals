
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";

export default function ProductCard({ product }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = product.image && !imageFailed;

  return (
    <article className="product-card">
      <div
        className={`product-card__image-wrap${
          hasImage ? "" : " is-placeholder"
        }`}
      >
        {hasImage ? (
          <img
            className="product-card__image"
            src={product.image}
            alt={`${product.name} product`}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="product-card__image-fallback">
            <Package size={40} strokeWidth={1.3} />
            <span>Image coming soon</span>
          </div>
        )}
      </div>

      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>

        <p className="product-card__description">
          {product.description}
        </p>

        <div className="product-card__actions">
          <Link
            to={`/products/${product.id}`}
            className="product-card__details"
            aria-label={`View details for ${product.name}`}
          >
            View Details
            <ArrowRight size={17} />
          </Link>

          <Link
            to={`/contact?product=${product.id}`}
            className="button button--primary product-card__enquiry"
            aria-label={`Enquire about ${product.name}`}
          >
            Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}
