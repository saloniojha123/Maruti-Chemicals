

// import { useMemo, useState } from "react";
// import { Search, PackageSearch } from "lucide-react";
// import { products, industries } from "../data/products";
// import ProductCard from "../components/ProductCard";

// const ALL = "All Industries";
// const filterOptions = [ALL, ...industries];

// export default function Products() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedIndustry, setSelectedIndustry] = useState(ALL);

//   const query = searchTerm.trim().toLowerCase();

//   // 1. Products that match the search text
//   //    (name, description or any of the product's industries)
//   const searchMatches = useMemo(() => {
//     if (!query) return products;

//     return products.filter((product) =>
//       [product.name, product.description, ...product.industries]
//         .join(" ")
//         .toLowerCase()
//         .includes(query)
//     );
//   }, [query]);

//   // 2. Then narrow by industry. A product can belong to several industries.
//   const visibleProducts =
//     selectedIndustry === ALL
//       ? searchMatches
//       : searchMatches.filter((product) =>
//           product.industries.includes(selectedIndustry)
//         );

//   // Number shown on each filter button (follows the current search)
//   function countFor(option) {
//     return option === ALL
//       ? searchMatches.length
//       : searchMatches.filter((product) => product.industries.includes(option))
//           .length;
//   }

//   const hasActiveFilters = query !== "" || selectedIndustry !== ALL;

//   function clearFilters() {
//     setSearchTerm("");
//     setSelectedIndustry(ALL);
//   }

//   return (
//     <>
//       <section className="products-hero">
//         <div className="container products-hero__inner">
//           <p className="eyebrow">Our Products</p>
//           <h1>Precision Products for Critical Environments</h1>
//           <p>
//             Wholesale chemical supply for businesses in the pharmaceutical,
//             food and healthcare sectors. Find your product, then send an
//             enquiry for grade, quantity and pricing.
//           </p>
//         </div>
//       </section>

//       <section className="section">
//         <div className="container">
//           <div className="products-toolbar">
//             <div className="products-toolbar__heading">
//               <p className="eyebrow">Product Catalogue</p>
//               <h2>Explore Products</h2>
//               <p aria-live="polite">
//                 {visibleProducts.length}{" "}
//                 {visibleProducts.length === 1 ? "product" : "products"} found
//               </p>
//             </div>

//             <label className="product-search">
//               <Search size={20} aria-hidden="true" />
//               <span className="sr-only">Search products</span>
//               <input
//                 type="search"
//                 placeholder="Search by product or industry..."
//                 value={searchTerm}
//                 onChange={(event) => setSearchTerm(event.target.value)}
//               />
//             </label>
//           </div>

//           <div
//             className="product-filters"
//             role="group"
//             aria-label="Filter by industry"
//           >
//             {filterOptions.map((option) => (
//               <button
//                 key={option}
//                 type="button"
//                 className={`product-filter ${
//                   selectedIndustry === option ? "is-active" : ""
//                 }`}
//                 aria-pressed={selectedIndustry === option}
//                 onClick={() => setSelectedIndustry(option)}
//               >
//                 {option}
//                 <span className="product-filter__count">{countFor(option)}</span>
//               </button>
//             ))}

//             {hasActiveFilters && (
//               <button
//                 type="button"
//                 className="product-filter"
//                 onClick={clearFilters}
//               >
//                 Clear filters
//               </button>
//             )}
//           </div>

//           {visibleProducts.length > 0 ? (
//             <div className="products-grid">
//               {visibleProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           ) : (
//             <div className="products-empty">
//               <PackageSearch size={42} aria-hidden="true" />
//               <h3>No matching products</h3>
//               <p>
//                 Try a different search term or choose another industry. If you
//                 cannot find what you need, contact us and we will help.
//               </p>
//               <button
//                 type="button"
//                 className="button button--primary"
//                 onClick={clearFilters}
//               >
//                 Clear Filters
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }



import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, PackageSearch } from "lucide-react";
import { products, industries } from "../data/products";
import ProductCard from "../components/ProductCard";

const ALL = "All Industries";
const filterOptions = [ALL, ...industries];

export default function Products() {
  // The Home page links here like /products?industry=Food%20Industry
  const [searchParams] = useSearchParams();
  const industryFromLink = searchParams.get("industry");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(() =>
    industries.includes(industryFromLink) ? industryFromLink : ALL
  );

  const query = searchTerm.trim().toLowerCase();

  // 1. Products that match the search text
  //    (name, description or any of the product's industries)
  const searchMatches = useMemo(() => {
    if (!query) return products;

    return products.filter((product) =>
      [product.name, product.description, ...product.industries]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [query]);

  // 2. Then narrow by industry. A product can belong to several industries.
  const visibleProducts =
    selectedIndustry === ALL
      ? searchMatches
      : searchMatches.filter((product) =>
          product.industries.includes(selectedIndustry)
        );

  // Number shown on each filter button (follows the current search)
  function countFor(option) {
    return option === ALL
      ? searchMatches.length
      : searchMatches.filter((product) => product.industries.includes(option))
          .length;
  }

  const hasActiveFilters = query !== "" || selectedIndustry !== ALL;

  function clearFilters() {
    setSearchTerm("");
    setSelectedIndustry(ALL);
  }

  return (
    <>
      <section className="products-hero">
        <div className="container products-hero__inner">
          <p className="eyebrow">Our Products</p>
          <h1>Precision Products for Critical Environments</h1>
          <p>
            Wholesale chemical supply for businesses in the pharmaceutical,
            food and healthcare sectors. Find your product, then send an
            enquiry for grade, quantity and pricing.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-toolbar">
            <div className="products-toolbar__heading">
              <p className="eyebrow">Product Catalogue</p>
              <h2>Explore Products</h2>
              <p aria-live="polite">
                {visibleProducts.length}{" "}
                {visibleProducts.length === 1 ? "product" : "products"} found
              </p>
            </div>

            <label className="product-search">
              <Search size={20} aria-hidden="true" />
              <span className="sr-only">Search products</span>
              <input
                type="search"
                placeholder="Search by product or industry..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
          </div>

          <div
            className="product-filters"
            role="group"
            aria-label="Filter by industry"
          >
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={`product-filter ${
                  selectedIndustry === option ? "is-active" : ""
                }`}
                aria-pressed={selectedIndustry === option}
                onClick={() => setSelectedIndustry(option)}
              >
                {option}
                <span className="product-filter__count">{countFor(option)}</span>
              </button>
            ))}

            {hasActiveFilters && (
              <button
                type="button"
                className="product-filter"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            )}
          </div>

          {visibleProducts.length > 0 ? (
            <div className="products-grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-empty">
              <PackageSearch size={42} aria-hidden="true" />
              <h3>No matching products</h3>
              <p>
                Try a different search term or choose another industry. If you
                cannot find what you need, contact us and we will help.
              </p>
              <button
                type="button"
                className="button button--primary"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}