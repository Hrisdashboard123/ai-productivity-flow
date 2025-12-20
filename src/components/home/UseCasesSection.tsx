import { SectionWrapper, SectionTitle } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Briefcase, 
  Users, 
  Lightbulb, 
  GraduationCap,
  Building2 
} from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Busy Professionals",
    description: "Executives and managers who need to optimize their time and delegate routine tasks to AI.",
    variant: "teal" as const,
  },
  {
    icon: Users,
    title: "Remote & Hybrid Teams",
    description: "Distributed teams looking for seamless coordination and communication across time zones.",
    variant: "pink" as const,
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurs & Freelancers",
    description: "Solo operators who wear multiple hats and need AI support to stay on top of everything.",
    variant: "purple" as const,
  },
  {
    icon: GraduationCap,
    title: "Consultants & Knowledge Workers",
    description: "Professionals who need to manage complex projects and client relationships efficiently.",
    variant: "teal" as const,
  },
  {
    icon: Building2,
    title: "Enterprise Teams",
    description: "Large organizations seeking scalable productivity solutions with advanced security.",
    variant: "pink" as const,
  },
];

export const UseCasesSection = () => {
  return (
    <SectionWrapper withDots>
      <SectionTitle
        subtitle="Use Cases"
        title="Built for"
        highlight="Every Professional"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <GlassCard
            key={useCase.title}
            variant={useCase.variant}
            delay={index * 0.1}
            className={index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
              useCase.variant === "teal" ? "bg-gradient-to-br from-teal/30 to-teal/10" :
              useCase.variant === "pink" ? "bg-gradient-to-br from-pink/30 to-pink/10" : 
              "bg-gradient-to-br from-purple/30 to-purple/10"
            }`}>
              <useCase.icon className={`w-7 h-7 ${
                useCase.variant === "teal" ? "text-teal" :
                useCase.variant === "pink" ? "text-pink" : "text-purple"
              }`} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {useCase.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {useCase.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
