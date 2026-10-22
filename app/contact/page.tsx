import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Our purpose-built AI solutions empower pharmaceutical and life sciences companies. Connect with our team or schedule a live demo of VeriBatch™.",
};

export default function ContactPage() {
  return <ContactClient />;
}
