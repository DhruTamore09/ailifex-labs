export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  isFlagship?: boolean;
  subtitle: string;
  description: string;
  href: string;
  iconName: string;
  features: string[];
  color: string;
  bg: string;
}

export const productsData: ProductItem[] = [
  {
    id: "veribatch",
    name: "VeriBatch™",
    badge: "Flagship Product",
    isFlagship: true,
    subtitle: "Intelligent BMR Review System",
    description:
      "Extracts executed Batch Manufacturing Record (BMR) data and validates it against the MBR as the primary golden standard—cross-checked with SOPs, ERP, MES, LIMS, and predefined business rules—to pinpoint discrepancies instantly and automate downstream workflows.",
    href: "/product?tab=veribatch#veribatch",
    iconName: "FileCheck",
    features: [
      "BMR review validated against MBR golden standard",
      "Multi-system cross-check: ERP, MES, LIMS & SOPs",
      "Automated discrepancy & OOS/OOT triage",
      "Review-by-Exception (RbE) & automated release workflows",
    ],
    color: "#4e27c3",
    bg: "#f0ebfd",
  },
  {
    id: "changesure",
    name: "ChangeSure™",
    badge: "Quality Governance",
    subtitle: "Enterprise Change Control & Quality Governance Platform",
    description:
      "Digitizes the complete lifecycle of operational and quality changes—from request and impact assessment to approval, implementation, verification, and closure in a secure, traceable workflow.",
    href: "/product?tab=changesure#changesure",
    iconName: "GitMerge",
    features: [
      "End-to-end digital change control workflows",
      "Cross-functional impact & risk assessments",
      "Secure, tamper-evident audit trails",
      "Implementation & effectiveness verification",
    ],
    color: "#0284c7",
    bg: "#e0f2fe",
  },
];
