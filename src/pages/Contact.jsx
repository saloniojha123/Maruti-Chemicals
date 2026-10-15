
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { products } from "../data/products";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  product: "",
  quantity: "",
  message: "",
};

export default function Contact() {
  // Product chosen on the Products page, e.g. /contact?product=citric-acid
  const [searchParams] = useSearchParams();
  const selectedProduct = products.find(
    (product) => product.id === searchParams.get("product")
  );

  // Empty form, or the form with the chosen product (and its industry,
  // if it belongs to only one) already filled in
  const prefilledForm = {
    ...initialForm,
    product: selectedProduct ? selectedProduct.name : "",
    industry:
      selectedProduct && selectedProduct.industries.length === 1
        ? selectedProduct.industries[0]
        : "",
  };

  const [form, setForm] = useState(prefilledForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Browser validation runs before this handler.
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-page-hero">
        <div className="container contact-page-hero__inner">
          <p className="eyebrow">Contact Us</p>
          <h1>Let's Discuss Your Chemical Requirements</h1>
          <p>
            Share your product requirements and relevant details to help
            us understand your enquiry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-page-layout">
          <aside className="contact-page-info">
            <p className="eyebrow">Get in Touch</p>
            <h2>How Can We Help?</h2>
            <p>
              For a more useful enquiry, include the product name, required
              grade, quantity, and intended application where applicable.
            </p>

            <div className="contact-info-item">
              <span className="contact-info-item__icon">
                <Mail size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>Email</h3>
                <p>Contact details to be added</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-item__icon">
                <Phone size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>Phone</h3>
                <p>Contact details to be added</p>
              </div>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-item__icon">
                <MapPin size={21} aria-hidden="true" />
              </span>
              <div>
                <h3>Address</h3>
                <p>Business address to be added</p>
              </div>
            </div>
          </aside>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success" role="status">
                <CheckCircle2 size={46} aria-hidden="true" />
                <h2>Form Validated Successfully</h2>
                <p>
                  Your details passed browser validation. No enquiry has
                  been sent or stored yet because the form is not connected
                  to a backend or email service.
                </p>
                <button
                  type="button"
                  className="button button--primary"
                  onClick={() => {
                    setForm(prefilledForm);
                    setSubmitted(false);
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <p className="eyebrow">Product Enquiry</p>
                <h2>Tell Us What You Need</h2>

                {selectedProduct && form.product === selectedProduct.name && (
                  <p className="contact-form-intro">
                    Enquiring about: <strong>{selectedProduct.name}</strong>
                  </p>
                )}

                <p className="contact-form-intro">
                  Fields marked * are required.
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-grid">
                    <div className="form-field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                        maxLength={100}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="company">Company / Organisation</label>
                      <input
                        id="company"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Company name"
                        maxLength={150}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        maxLength={254}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        placeholder="Your phone number"
                        maxLength={20}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="industry">Industry *</label>
                      <select
                        id="industry"
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select an industry</option>
                        <option value="Pharmaceutical Industry">
                          Pharmaceutical Industry
                        </option>
                        <option value="Food Industry">Food Industry</option>
                        <option value="Hospitals & Healthcare">
                          Hospitals & Healthcare
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="form-field">
                      <label htmlFor="product">Product Name *</label>
                      <input
                        id="product"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        placeholder="Chemical or product name"
                        required
                        maxLength={150}
                      />
                    </div>

                    <div className="form-field form-field--full">
                      <label htmlFor="quantity">Required Quantity</label>
                      <input
                        id="quantity"
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 25 kg, 100 litres"
                        maxLength={100}
                      />
                    </div>

                    <div className="form-field form-field--full">
                      <label htmlFor="message">Additional Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Share the required grade, specifications, intended application, or other details."
                        rows={5}
                        required
                        minLength={10}
                        maxLength={2000}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="button button--primary contact-submit"
                  >
                    Validate Enquiry
                    <Send size={18} aria-hidden="true" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}