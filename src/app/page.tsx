import VocalChatStyleHero from "@/components/VocalChatStyleHero/VocalChatStyleHero";
import WorkflowSection from "@/components/WorkflowSection/WorkflowSection";
import ComparisonSection from "@/components/ComparisonSection/ComparisonSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import FAQSectionNew from "@/components/FAQSectionNew/FAQSectionNew";
import Review from "@/components/Review/review";
import IndustrySolutions from "@/components/industry-solutions/industry-solutions";
import FeaturesSection from "@/components/FullyAutomatedWorkflow/FullyAutomatedWorkflow";
import { AdvancedAiFeatures } from "@/components/AdvancedAiFeatures/AdvancedAiFeatures";
import VocalChatAgentCarousel from "@/components/VocalChatStyleHero/VocalChatAgentCarousel";
import CallNotification from "@/components/VocalChatStyleHero/AgentPreview";
import { AIPoweredSolution } from "@/components/AiPoweredSolutions/aiPoweredSolutions";
import { WhyChoose } from "@/components/WhyChoose/whyChoose";
import ConsultationSection from "@/components/BookAConsultation/BookAConsultation";

export default function Home() {
  return (
    <div>
      <VocalChatStyleHero />
      <VocalChatAgentCarousel />
      <CallNotification />
      <WorkflowSection />
      <AdvancedAiFeatures />
      <AIPoweredSolution />
      <FeaturesSection />
      <WhyChoose />
      <IndustrySolutions />
      <ComparisonSection />
      <ServicesSection />
      <FAQSectionNew />
      <ConsultationSection />
      <Review />
    </div>
  );
}
