

import IndustryDetail from "../components/IndustryDetail";

const applications = [
  {
    title: "Pharmaceutical Manufacturing",
    description:
      "Chemical sourcing requirements for manufacturing processes depend on the product grade, approved specifications, and intended use.",
  },
  {
    title: "Laboratory Operations",
    description:
      "Laboratory applications may require specific purity levels, documentation, packaging, and handling conditions.",
  },
  {
    title: "Quality & Documentation",
    description:
      "Product documentation and traceability requirements should be confirmed according to the customer's quality procedures.",
  },
];

const otherIndustries = [
  { title: "Food Industry", path: "/industries/food" },
  { title: "Hospitals & Healthcare", path: "/industries/healthcare" },
];

export default function PharmaceuticalIndustry() {
  return (
    <IndustryDetail
      eyebrow="Industries / Pharmaceutical"
      title="Chemical Supply for Pharmaceutical Requirements"
      description="A considered approach to chemical sourcing, product specifications, and documentation for pharmaceutical and related laboratory requirements."
      applications={applications}
      considerations={[
        "Required chemical name and grade",
        "Purity and technical specifications",
        "Safety data and quality documentation",
        "Packaging and quantity requirements",
        "Applicable regulatory requirements",
      ]}
      otherIndustries={otherIndustries}
    />
  );
}
