

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


    
const sampleSpecs = {
  "isopropyl-alcohol": {
    chemicalType: "Solvent",
    sampleGrade: "Industrial Grade",
    samplePackaging: "25 L / 200 L drum",
    casNumber: "67-63-0",
  },
  "hydrogen-peroxide": {
    chemicalType: "Oxidising Agent",
    sampleGrade: "Technical Grade",
    samplePackaging: "5 L / 30 L container",
    casNumber: "7722-84-1",
  },
  "sodium-chloride": {
    chemicalType: "Inorganic Salt",
    sampleGrade: "Food / Industrial Grade",
    samplePackaging: "25 kg bag",
    casNumber: "7647-14-5",
  },
  "sodium-hydroxide": {
    chemicalType: "Alkali",
    sampleGrade: "Industrial Grade",
    samplePackaging: "25 kg bag",
    casNumber: "1310-73-2",
  },
  "citric-acid": {
    chemicalType: "Organic Acid",
    sampleGrade: "Food / Pharmaceutical Grade",
    samplePackaging: "25 kg bag",
    casNumber: "77-92-9",
  },
  "glycerine": {
    chemicalType: "Polyol",
    sampleGrade: "Industrial / Refined Grade",
    samplePackaging: "25 kg / 250 kg drum",
    casNumber: "56-81-5",
  },
  "ethanol": {
    chemicalType: "Solvent",
    sampleGrade: "Industrial Grade",
    samplePackaging: "5 L / 200 L drum",
    casNumber: "64-17-5",
  },
  "acetic-acid": {
    chemicalType: "Organic Acid",
    sampleGrade: "Industrial Grade",
    samplePackaging: "30 L / 200 L drum",
    casNumber: "64-19-7",
  },
  "acetone": {
    chemicalType: "Solvent",
    sampleGrade: "Industrial Grade",
    samplePackaging: "5 L / 200 L drum",
    casNumber: "67-64-1",
  },
  "sterile-tape": {
    chemicalType: "Laboratory / Cleanroom Supply",
    sampleGrade: "Application-Specific",
    samplePackaging: "Sample pack / Bulk pack",
    casNumber: "Not applicable",
  },
  "sodium-bicarbonate": {
    chemicalType: "Inorganic Salt",
    sampleGrade: "Food / Industrial Grade",
    samplePackaging: "25 kg bag",
    casNumber: "144-55-8",
  },
  "ascorbic-acid": {
    chemicalType: "Organic Acid",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag",
    casNumber: "50-81-7",
  },
  "sodium-benzoate": {
    chemicalType: "Preservative",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag",
    casNumber: "532-32-1",
  },
  "potassium-sorbate": {
    chemicalType: "Preservative",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag",
    casNumber: "24634-61-5",
  },
  "calcium-propionate": {
    chemicalType: "Preservative",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag",
    casNumber: "4075-81-4",
  },
  "xanthan-gum": {
    chemicalType: "Thickener",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag",
    casNumber: "11138-66-2",
  },
  "sorbitol": {
    chemicalType: "Polyol",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag / liquid drum",
    casNumber: "50-70-4",
  },
  "glucose": {
    chemicalType: "Carbohydrate",
    sampleGrade: "Food Grade",
    samplePackaging: "25 kg bag",
    casNumber: "50-99-7",
  },
  "sodium-hypochlorite": {
    chemicalType: "Disinfectant",
    sampleGrade: "Technical Grade",
    samplePackaging: "5 L / 30 L container",
    casNumber: "7681-52-9",
  },
  "liquid-sampling-bags": {
    chemicalType: "Laboratory Consumable",
    sampleGrade: "Application-Specific",
    samplePackaging: "Pack / Bulk pack",
    casNumber: "Not applicable",
  },
};

// Existing product data, enriched with sample specifications.
export const products = catalogue.map((item) => {
  const id = slugify(item.name);

  return {
    id,
    ...item,
    image: `/images/${id}.jpg`,
    category: item.industries[0],
    ...(sampleSpecs[id] || {}),
  };
});

export const featuredProducts = products.filter(
  (product) => product.featured
);

export const productCategories = industries;
