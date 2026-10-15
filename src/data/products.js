// // Editable starter catalogue based on common supply enquiries and the company reference.
// // Confirm current availability, grade, concentration, specifications and suitability before publishing or quoting.
// const productGroups = [
//   {
//     category: "Pharmaceutical Industry",
//     products: [
//       ["Isopropyl Alcohol", "Solvent and process-supply enquiry option; confirm grade, concentration and intended use."],
//       ["Hydrogen Peroxide", "Available for enquiries requiring a specified concentration and application."],
//       ["Sodium Chloride", "A core inorganic material; confirm grade, pack size and specification."],
//       ["Sodium Hydroxide", "Alkali supply option; concentration, form and handling requirements to be confirmed."],
//       ["Citric Acid", "Multi-sector acidulant and process material; confirm grade and specification."],
//       ["Glycerine", "Glycerine (glycerol) supply option; confirm grade, source and intended application."],
//       ["Ethanol", "Alcohol supply enquiry; confirm applicable grade, concentration and regulatory requirements."],
//       ["Acetic Acid", "Acid supply option; confirm concentration, grade and handling requirements."],
//       ["Acetone", "Solvent supply enquiry; confirm specification, pack size and intended use."],
//       ["Sterile Tape", "Cleanroom and pharma-grade adhesion product shown in the company reference; confirm availability and specification."],
//     ],
//   },
//   {
//     category: "Food Industry",
//     products: [
//       ["Citric Acid", "Food-processing supply enquiry; confirm the required food grade and specifications."],
//       ["Sodium Bicarbonate", "Food-processing ingredient option; confirm grade and intended application."],
//       ["Sodium Chloride", "Salt supply option for food-sector enquiries; confirm grade, packaging and specifications."],
//       ["Ascorbic Acid", "Ingredient supply enquiry; confirm applicable grade and use requirements."],
//       ["Sodium Benzoate", "Preservative supply enquiry; confirm grade and local requirements for intended use."],
//       ["Potassium Sorbate", "Food ingredient option; confirm grade and intended application with the supplier."],
//       ["Calcium Propionate", "Ingredient supply enquiry; confirm specification and application requirements."],
//       ["Xanthan Gum", "Food-processing ingredient option; confirm grade, viscosity specification and pack size."],
//       ["Sorbitol", "Ingredient supply enquiry; confirm grade, form and intended application."],
//       ["Glucose", "Food-processing supply option; confirm product form, grade and specifications."],
//     ],
//   },
//   {
//     category: "Hospitals & Healthcare",
//     products: [
//       ["Hydrogen Peroxide", "Institutional supply enquiry; confirm concentration, intended use and handling requirements."],
//       ["Isopropyl Alcohol", "Healthcare or laboratory supply enquiry; confirm grade and application before ordering."],
//       ["Sodium Hypochlorite", "Cleaning and process supply enquiry; confirm concentration and handling requirements."],
//       ["Ethanol", "Institutional alcohol supply enquiry; confirm grade, concentration and applicable requirements."],
//       ["Glycerine", "Healthcare-sector supply enquiry; confirm grade, pack size and intended application."],
//       ["Sodium Chloride", "Institutional supply option; confirm grade, specification and intended use."],
//       ["Acetic Acid", "Laboratory or process supply enquiry; confirm concentration, grade and handling needs."],
//       ["Liquid Sampling Bags", "Sterile, leak-proof sample-collection product shown in the company reference; confirm sizes and specification."],
//       ["Sterile Tape", "Cleanroom and healthcare supply option shown in the company reference; confirm availability and specification."],
//       ["Sodium Bicarbonate", "Institutional supply enquiry; confirm grade and intended application with the supplier."],
//     ],
//   },
// ];

// const productImages = {
//   "Isopropyl Alcohol": "/images/isopropyl-alcohol.jpg",
//   "Hydrogen Peroxide": "/images/hydrogen-peroxide.jpg",
//   "Sodium Chloride": "/images/sodium-chloride.jpg",
//   "Sodium Hydroxide": "/images/sodium-hydroxide.jpg",
//   "Citric Acid": "/images/citric-acid.jpg",
//   Glycerine: "/images/glycerine.jpg",
//   Ethanol: "/images/ethanol.jpg",
//   "Acetic Acid": "/images/acetic-acid.jpg",
//   Acetone: "/images/acetone.jpg",
//   "Sterile Tape": "/images/sterile-tape.jpg",
//   "Sodium Bicarbonate": "/images/sodium-bicarbonate.jpg",
//   "Ascorbic Acid": "/images/ascorbic-acid.jpg",
//   "Sodium Benzoate": "/images/sodium-benzoate.jpg",
//   "Potassium Sorbate": "/images/potassium-sorbate.jpg",
//   "Calcium Propionate": "/images/calcium-propionate.jpg",
//   "Xanthan Gum": "/images/xanthan-gum.jpg",
//   Sorbitol: "/images/sorbitol.jpg",
//   Glucose: "/images/glucose.jpg",
//   "Sodium Hypochlorite": "/images/sodium-hypochlorite.jpg",
//   "Liquid Sampling Bags": "/images/liquid-sampling-bags.jpg",
// };



// export const products = productGroups.flatMap(
//   ({ category, products: items }, groupIndex) =>
//     items.map(([name, description], itemIndex) => ({
//       id: groupIndex * 10 + itemIndex + 1,
//       name,
//       category,
//       description,
//       image: productImages[name] || "",
//     })),
// );

// export const productCategories = productGroups.map(
//   ({ category }) => category,
// );


// src/data/products.js
// ------------------------------------------------------------------
// Single source of truth for the product catalogue.
// - One entry per product.
// - A product can belong to several industries.
// - To add a product, add one line to the `catalogue` list below.
//
// NOTE: this is a starter list. Confirm every product name and
// description with Maruti Chemicals before the site goes live.
// ------------------------------------------------------------------

export const industries = [
  "Pharmaceutical Industry",
  "Food Industry",
  "Hospitals & Healthcare",
];

const [PHARMA, FOOD, HEALTH] = industries;

const catalogue = [
  {
    name: "Isopropyl Alcohol",
    industries: [PHARMA, HEALTH],
    description: "Solvent and cleaning agent used in laboratories, pharmaceutical and healthcare settings.",
    featured: true,
  },
  {
    name: "Hydrogen Peroxide",
    industries: [PHARMA, HEALTH],
    description: "Oxidising agent used for disinfection and cleaning.",
    featured: true,
  },
  {
    name: "Sodium Chloride",
    industries: [PHARMA, FOOD, HEALTH],
    description: "Common salt used across pharmaceutical, food and healthcare applications.",
  },
  {
    name: "Sodium Hydroxide",
    industries: [PHARMA],
    description: "Strong alkali used for pH adjustment and process cleaning.",
  },
  {
    name: "Citric Acid",
    industries: [PHARMA, FOOD],
    description: "Organic acid used as an acidulant and pH regulator in food and pharmaceutical products.",
    featured: true,
  },
  {
    name: "Glycerine",
    industries: [PHARMA, HEALTH],
    description: "Humectant and solvent used in pharmaceutical and healthcare formulations.",
  },
  {
    name: "Ethanol",
    industries: [PHARMA, HEALTH],
    description: "Alcohol used as a solvent and disinfectant in laboratory and healthcare settings.",
  },
  {
    name: "Acetic Acid",
    industries: [PHARMA, HEALTH],
    description: "Organic acid used in laboratory work and chemical processing.",
  },
  {
    name: "Acetone",
    industries: [PHARMA],
    description: "Fast-evaporating solvent used for cleaning and laboratory work.",
  },
  {
    name: "Sterile Tape",
    industries: [PHARMA, HEALTH],
    description: "Sterile tape for cleanroom, pharmaceutical manufacturing, hospital and laboratory use.",
  },
  {
    name: "Sodium Bicarbonate",
    industries: [FOOD, HEALTH],
    description: "Mild alkali used in food processing and as a buffering agent.",
  },
  {
    name: "Ascorbic Acid",
    industries: [FOOD],
    description: "Vitamin C used as an antioxidant and nutrient in food products.",
  },
  {
    name: "Sodium Benzoate",
    industries: [FOOD],
    description: "Preservative used to extend the shelf life of acidic foods and beverages.",
  },
  {
    name: "Potassium Sorbate",
    industries: [FOOD],
    description: "Preservative used to inhibit mould and yeast in food products.",
  },
  {
    name: "Calcium Propionate",
    industries: [FOOD],
    description: "Preservative used in baked goods to prevent mould growth.",
  },
  {
    name: "Xanthan Gum",
    industries: [FOOD],
    description: "Thickener and stabiliser used in food products.",
  },
  {
    name: "Sorbitol",
    industries: [FOOD],
    description: "Sweetener and humectant used in food and pharmaceutical products.",
  },
  {
    name: "Glucose",
    industries: [FOOD],
    description: "Sugar used as a sweetener and ingredient in food processing.",
  },
  {
    name: "Sodium Hypochlorite",
    industries: [HEALTH],
    description: "Disinfectant and bleaching agent used for cleaning and sanitising.",
  },
  {
    name: "Liquid Sampling Bags",
    industries: [HEALTH],
    description: "Sterile, leak-proof bags for collecting and storing liquid samples.",
    featured: true,
  },
];

// "Citric Acid" -> "citric-acid" (used for ids, image names and enquiry links)
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const products = catalogue.map((item) => {
  const id = slugify(item.name);

  return {
    id,
    ...item,
    // Image file for each product goes in public/images/<id>.jpg
    image: `/images/${id}.jpg`,
    // TEMPORARY: old pages still read product.category.
    // We remove this line in Step 3 when Products.jsx is updated.
    category: item.industries[0],
  };
});

export const featuredProducts = products.filter((product) => product.featured);

// Kept so the current Products.jsx import keeps working
export const productCategories = industries;