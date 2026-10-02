import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LifeScienceX AI. Request a demo of VeriBatch™ (Life Sciences Batch Review System) or ask us about pharmaceutical batch review software for your organization.",
};

export default function ContactPage() {
  return <ContactClient />;
}
