
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Industries from "./pages/Industries";
// import PharmaceuticalIndustry from "./pages/PharmaceuticalIndustry";
// import FoodIndustry from "./pages/FoodIndustry";
// import HealthcareIndustry from "./pages/HealthcareIndustry";

// import Products from "./pages/Products";
// import WhyUs from "./pages/WhyUs";
// import Contact from "./pages/Contact";

// function Placeholder({ title }) {
//   return (
//     <section className="container section">
//       <h1>{title}</h1>
//       <p>This page is coming next.</p>
//     </section>
//   );
// }

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <main id="main">
//         <Routes>
//           {/* Homepage */}
//           <Route path="/" element={<Home />} />

//           {/* About and industries overview */}
//           <Route path="/about" element={<About />} />
//           <Route path="/industries" element={<Industries />} />

//           {/* Individual industry pages */}
//           <Route
//             path="/industries/pharmaceutical"
//             element={<PharmaceuticalIndustry />}
//           />

//           <Route
//             path="/industries/food"
//             element={<FoodIndustry />}
//           />

//           <Route
//             path="/industries/healthcare"
//             element={<HealthcareIndustry />}
//           />

//           <Route 
//             path="/products"
//              element={<Products />} 
//           />

//           <Route 
//               path="/why-us" 
//               element={<WhyUs />} 
//           />

//           <Route path="/contact"
//            element={<Contact />} 
//           />

//           {/* Unknown URLs */}
//           <Route
//             path="*"
//             element={<Placeholder title="Page Not Found" />}
//           />
//         </Routes>
//       </main>

//       <Footer />
//     </BrowserRouter>
//   );
// }

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
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}