import type { Metadata } from "next";
import PricingExperience from "@/components/Pricing/PricingExperience";

export const metadata: Metadata = {
  title: "Pricing | Zaptal",
  description:
    "Compare Zaptal pricing plans and estimate the right AI receptionist, scheduling, missed-call recovery, and automation package for your clinic.",
};

export default function PricingPage() {
  return <PricingExperience />;
}
