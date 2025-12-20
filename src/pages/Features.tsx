import { Layout } from "@/components/layout";
import { SectionWrapper, SectionTitle } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedElement, GlowOrb } from "@/components/ui/AnimatedElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckSquare,
  Calendar,
  Mail,
  Mic,
  Workflow,
  Zap,
  Brain,
  BarChart3,
  Bell,
  Clock,
  Shield,
  Globe,
  ArrowRight,
} from "lucide-react";

const mainFeatures = [
  {
    icon: CheckSquare,
    title: "Smart Task Management",
    description: "Our AI analyzes your tasks, deadlines, and work patterns to intelligently prioritize what matters most. Get personalized recommendations on what to focus on next.",
    highlights: [
      "AI-powered task prioritization",
      "Automatic deadline tracking",
      "Smart categorization",
      "Progress insights & analytics",
    ],
    variant: "teal" as const,
  },
  {
    icon: Calendar,
    title: "Schedule & Calendar Intelligence",
    description: "Transform your calendar with AI that learns your preferences, suggests optimal meeting times, and protects your focus time from unnecessary interruptions.",
    highlights: [
      "Intelligent scheduling suggestions",
      "Focus time protection",
      "Multi-calendar sync",
      "Smart conflict resolution",
    ],
    variant: "pink" as const,
  },
  {
    icon: Mail,
    title: "Email Intelligence",
    description: "Never miss important emails again. Our AI summarizes lengthy threads, drafts responses, and prioritizes messages based on urgency and sender importance.",
    highlights: [
      "Automatic email summaries",
      "Smart reply suggestions",
      "Priority inbox sorting",
      "Spam & newsletter filtering",
    ],
    variant: "purple" as const,
  },
  {
    icon: Mic,
    title: "Voice & Text Commands",
    description: "Interact naturally with your AI assistant using voice or text. Create tasks, schedule meetings, and manage your workflow hands-free.",
    highlights: [
      "Natural language processing",
      "Multi-language support",
      "Context-aware responses",
      "Hands-free operation",
    ],
    variant: "teal" as const,
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Build custom automations that handle repetitive tasks. Connect your favorite apps and let AI orchestrate complex workflows effortlessly.",
    highlights: [
      "Visual workflow builder",
      "100+ app integrations",
      "Conditional logic support",
      "Scheduled automations",
    ],
    variant: "pink" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Gain deep insights into your productivity patterns. Understand where your time goes and get actionable recommendations for improvement.",
    highlights: [
      "Time tracking analytics",
      "Productivity scores",
      "Custom reports",
      "Goal tracking",
    ],
    variant: "purple" as const,
  },
];

const additionalFeatures = [
  { icon: Brain, title: "AI Learning", description: "Continuously improves based on your usage" },
  { icon: Bell, title: "Smart Reminders", description: "Context-aware notifications" },
  { icon: Clock, title: "Time Blocking", description: "Protect your focus time" },
  { icon: Shield, title: "Enterprise Security", description: "SOC 2 compliant" },
  { icon: Globe, title: "Multi-platform", description: "Web, mobile, and desktop" },
  { icon: Zap, title: "Instant Sync", description: "Real-time across all devices" },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <GlowOrb color="teal" size="xl" className="-top-40 -right-40" />
        <GlowOrb color="purple" size="lg" className="bottom-0 -left-32" />
        
        <div className="container-narrow px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-teal font-medium text-sm tracking-wide uppercase mb-4">
              Features
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features for{" "}
              <span className="gradient-text">Modern Professionals</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover how SphereStech's AI-powered features can transform your productivity
              and help you achieve more every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <SectionWrapper>
        <div className="space-y-24">
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <AnimatedElement direction={index % 2 === 0 ? "left" : "right"}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    feature.variant === "teal" ? "bg-gradient-to-br from-teal/30 to-teal/10" :
                    feature.variant === "pink" ? "bg-gradient-to-br from-pink/30 to-pink/10" :
                    "bg-gradient-to-br from-purple/30 to-purple/10"
                  }`}>
                    <feature.icon className={`w-7 h-7 ${
                      feature.variant === "teal" ? "text-teal" :
                      feature.variant === "pink" ? "text-pink" : "text-purple"
                    }`} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          feature.variant === "teal" ? "bg-teal/20 text-teal" :
                          feature.variant === "pink" ? "bg-pink/20 text-pink" :
                          "bg-purple/20 text-purple"
                        }`}>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
              
              <AnimatedElement direction={index % 2 === 0 ? "right" : "left"}>
                <GlassCard variant={feature.variant} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-video flex items-center justify-center">
                    <feature.icon className={`w-24 h-24 ${
                      feature.variant === "teal" ? "text-teal/40" :
                      feature.variant === "pink" ? "text-pink/40" : "text-purple/40"
                    }`} />
                  </div>
                </GlassCard>
              </AnimatedElement>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Additional Features Grid */}
      <SectionWrapper withGrid>
        <SectionTitle
          subtitle="And More"
          title="Everything You Need"
          highlight="in One Platform"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <GlassCard
              key={feature.title}
              variant={index % 3 === 0 ? "teal" : index % 3 === 1 ? "pink" : "purple"}
              delay={index * 0.1}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  index % 3 === 0 ? "bg-teal/20" :
                  index % 3 === 1 ? "bg-pink/20" : "bg-purple/20"
                }`}>
                  <feature.icon className={`w-5 h-5 ${
                    index % 3 === 0 ? "text-teal" :
                    index % 3 === 1 ? "text-pink" : "text-purple"
                  }`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <GlassCard variant="teal" className="text-center py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start your free trial today and discover how SphereStech can transform your productivity.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request a Demo
              <ArrowRight size={20} />
            </Link>
          </Button>
        </GlassCard>
      </SectionWrapper>
    </Layout>
  );
};

export default Features;
