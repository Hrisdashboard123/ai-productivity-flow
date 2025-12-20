import { SectionWrapper, SectionTitle } from "@/components/ui/SectionWrapper";
import { AnimatedElement, GlowOrb } from "@/components/ui/AnimatedElements";
import { Check, Shield, Zap, Brain, Lock, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI-Driven Prioritization",
    description: "Our AI learns your work patterns and automatically prioritizes tasks for maximum impact.",
  },
  {
    icon: Zap,
    title: "Time-Saving Automation",
    description: "Automate repetitive tasks and save up to 10 hours per week on administrative work.",
  },
  {
    icon: TrendingUp,
    title: "Enterprise-Grade Intelligence",
    description: "Advanced analytics and insights to optimize team productivity at scale.",
  },
  {
    icon: Lock,
    title: "Secure & Scalable",
    description: "Bank-level encryption and SOC 2 compliance to keep your data safe.",
  },
];

export const WhyChooseSection = () => {
  return (
    <SectionWrapper className="relative">
      <GlowOrb color="purple" size="lg" className="-right-20 top-1/2 -translate-y-1/2" />
      
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Content */}
        <div>
          <AnimatedElement direction="left">
            <span className="text-teal font-medium text-sm tracking-wide uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Smartest Way to{" "}
              <span className="gradient-text">Boost Productivity</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              SphereStech combines cutting-edge AI with intuitive design to create 
              the ultimate productivity companion. Let our assistant handle the 
              busy work while you focus on what truly matters.
            </p>
          </AnimatedElement>
          
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <AnimatedElement key={reason.title} delay={0.1 * index} direction="left">
                <div className="flex gap-4 items-start p-4 rounded-xl hover:bg-muted/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-purple/20 flex items-center justify-center shrink-0">
                    <reason.icon className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
        
        {/* Right - Visual */}
        <AnimatedElement direction="right" className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-pink/10 to-purple/10 rounded-3xl" />
            
            {/* Stats grid */}
            <div className="relative h-full p-8 grid grid-cols-2 gap-4">
              {[
                { value: "85%", label: "Time Saved", color: "teal" },
                { value: "3x", label: "Faster Workflows", color: "pink" },
                { value: "99.9%", label: "Uptime SLA", color: "purple" },
                { value: "24/7", label: "AI Availability", color: "teal" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`glass-card-${stat.color} p-6 rounded-2xl flex flex-col items-center justify-center text-center`}
                >
                  <div className={`text-3xl md:text-4xl font-bold ${
                    stat.color === "teal" ? "text-teal" :
                    stat.color === "pink" ? "text-pink" : "text-purple"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SectionWrapper>
  );
};
