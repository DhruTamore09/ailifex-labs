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
    subtitle: "Life Sciences Batch Review System",
    description:
      "Automated side-by-side MBR vs BMR parameter reconciliation, 6M Fishbone root cause analysis, ICH Q9 risk scoring, and 1-click QA disposition sign-off.",
    href: "/product?tab=veribatch#veribatch",
    iconName: "FileCheck",
    features: [
      "100% Parameter-level verification",
      "Automated OOS deviation triage",
      "Human-in-the-loop QA sign-off",
      "ALCOA+ audit trail lock",
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
