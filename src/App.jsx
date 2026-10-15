

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Industries from "./pages/Industries";
import PharmaceuticalIndustry from "./pages/PharmaceuticalIndustry";
import FoodIndustry from "./pages/FoodIndustry";
import HealthcareIndustry from "./pages/HealthcareIndustry";
import Products from "./pages/Products";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";

function NotFound() {
  return (
    <section className="container section">
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/pharmaceutical" element={<PharmaceuticalIndustry />} />
          <Route path="/industries/food" element={<FoodIndustry />} />
          <Route path="/industries/healthcare" element={<HealthcareIndustry />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route
         path="/products/:productId"
         element={<ProductDetail />}
          />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}