
import IndustryDetail from "../components/IndustryDetail";

const applications = [
  {
    title: "Facility Operations",
    description:
      "Chemical requirements for facility operations should be assessed against the intended task, product label, and handling instructions.",
  },
  {
    title: "Laboratory Requirements",
    description:
      "Laboratories may need specific product grades, documented specifications, and suitable packaging for their workflows.",
  },
  {
    title: "Hygiene & Safety",
    description:
      "Products used in hygiene-related settings must be suitable for the specific purpose and handled according to their instructions.",
  },
];

const otherIndustries = [
  {
    title: "Pharmaceutical Industry",
    path: "/industries/pharmaceutical",
  },
  { title: "Food Industry", path: "/industries/food" },
];

export default function HealthcareIndustry() {
  return (
    <IndustryDetail
      eyebrow="Industries / Hospitals & Healthcare"
      title="Chemical Supply for Healthcare Environments"
      description="A requirements-led approach to sourcing chemicals for relevant healthcare, facility, and laboratory applications, subject to product suitability and applicable standards."
      applications={applications}
      considerations={[
        "Exact intended application",
        "Required grade and concentration",
        "Product safety and handling instructions",
        "Relevant approvals and documentation",
        "Storage, packaging, and delivery requirements",
      ]}
      otherIndustries={otherIndustries}
    />
  );
}
