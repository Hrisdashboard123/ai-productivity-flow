import { Layout } from "@/components/layout";
import {
  HeroSection,
  FeaturesSection,
  WhyChooseSection,
  UseCasesSection,
  TestimonialsSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <UseCasesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
