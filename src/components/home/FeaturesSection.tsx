import { SectionWrapper, SectionTitle } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  CheckSquare, 
  Calendar, 
  Mail, 
  Mic, 
  Workflow,
  Zap
} from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description: "AI prioritizes your tasks based on deadlines, importance, and your work patterns for optimal productivity.",
    variant: "teal" as const,
  },
  {
    icon: Calendar,
    title: "Schedule & Calendar Intelligence",
    description: "Intelligent scheduling that learns your preferences and optimizes your calendar automatically.",
    variant: "pink" as const,
  },
  {
    icon: Mail,
    title: "Email Intelligence",
    description: "Smart email summaries, priority sorting, and automated responses to keep your inbox under control.",
    variant: "purple" as const,
  },
  {
    icon: Mic,
    title: "Voice & Text Commands",
    description: "Natural language processing for seamless interaction via voice or text commands.",
    variant: "teal" as const,
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and create custom workflows that save hours every week.",
    variant: "pink" as const,
  },
  {
    icon: Zap,
    title: "Real-time Sync",
    description: "Instant synchronization across all your devices and integrated applications.",
    variant: "purple" as const,
  },
];

export const FeaturesSection = () => {
  return (
    <SectionWrapper id="features" withGrid>
      <SectionTitle
        subtitle="Powerful Features"
        title="Everything You Need to"
        highlight="Stay Productive"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <GlassCard
            key={feature.title}
            variant={feature.variant}
            delay={index * 0.1}
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
              feature.variant === "teal" ? "bg-teal/20" :
              feature.variant === "pink" ? "bg-pink/20" : "bg-purple/20"
            }`}>
              <feature.icon className={`w-6 h-6 ${
                feature.variant === "teal" ? "text-teal" :
                feature.variant === "pink" ? "text-pink" : "text-purple"
              }`} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {feature.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
