import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Reusable button.
 *
 * - Pass `to`   -> renders a router link (internal page, e.g. "/products")
 * - Pass `href` -> renders a normal link (mailto:, tel:, external sites)
 * - Pass neither -> renders a real <button> (forms, filters, menus)
 *
 * variant: "primary" | "secondary" | "light"
 * arrow:   adds a small arrow icon that slides on hover
 */
export default function Button({
  children,
  variant = "primary",
  to,
  href,
  arrow = false,
  className = "",
  ...rest
}) {
  const classes = `btn btn--${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}