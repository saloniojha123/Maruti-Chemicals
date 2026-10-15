
import IndustryDetail from "../components/IndustryDetail";

const applications = [
  {
    title: "Food Processing",
    description:
      "Chemical requirements for food processing must match the intended application and the relevant food-grade specifications.",
  },
  {
    title: "Processing & Cleaning",
    description:
      "Products used in processing or cleaning operations require appropriate specifications and instructions for their intended use.",
  },
  {
    title: "Product Compliance",
    description:
      "Customers should verify relevant food-safety requirements, permitted uses, and supporting product documentation before procurement.",
  },
];

const otherIndustries = [
  {
    title: "Pharmaceutical Industry",
    path: "/industries/pharmaceutical",
  },
  { title: "Hospitals & Healthcare", path: "/industries/healthcare" },
];

export default function FoodIndustry() {
  return (
    <IndustryDetail
      eyebrow="Industries / Food"
      title="Chemical Supply for Food Processing"
      description="Supporting food-industry sourcing requirements with attention to intended use, appropriate product grades, and applicable food-safety specifications."
      applications={applications}
      considerations={[
        "Intended food-processing application",
        "Required food-grade certification or specification",
        "Permitted use under applicable regulations",
        "Product composition and documentation",
        "Packaging, quantity, and storage requirements",
      ]}
      otherIndustries={otherIndustries}
    />
  );
}
