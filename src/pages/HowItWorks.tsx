import { Layout } from "@/components/layout";
import { SectionWrapper, SectionTitle } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedElement, GlowOrb, FloatingElement } from "@/components/ui/AnimatedElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Link2,
  MessageSquare,
  Brain,
  Workflow,
  ArrowRight,
  Mic,
  Keyboard,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Tools",
    description: "Integrate SphereStech with your favorite productivity tools – calendar, email, project management, and more. Setup takes less than 5 minutes.",
    variant: "teal" as const,
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Interact via Voice or Text",
    description: "Simply speak or type your requests naturally. Our AI understands context and intent, making interactions feel like talking to a brilliant assistant.",
    variant: "pink" as const,
  },
  {
    number: "03",
    icon: Brain,
    title: "AI Analyzes & Prioritizes",
    description: "Our intelligent engine analyzes your tasks, deadlines, and patterns to prioritize what matters most and suggest optimal workflows.",
    variant: "purple" as const,
  },
  {
    number: "04",
    icon: Workflow,
    title: "Assistant Manages Workflows",
    description: "Sit back as SphereStech handles scheduling, reminders, email management, and automation – keeping you focused on high-impact work.",
    variant: "teal" as const,
  },
];

const demoCommands = [
  "Schedule a meeting with Sarah tomorrow at 2 PM",
  "Summarize my unread emails from today",
  "Create a task to review the Q4 report by Friday",
  "Block focus time for 2 hours this afternoon",
  "What's on my calendar for next week?",
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <GlowOrb color="pink" size="xl" className="-top-40 -left-40" />
        <GlowOrb color="teal" size="lg" className="bottom-0 -right-32" />
        
        <div className="container-narrow px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-teal font-medium text-sm tracking-wide uppercase mb-4">
              How It Works
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple Setup,{" "}
              <span className="gradient-text">Powerful Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Get started with SphereStech in minutes. Our AI assistant seamlessly 
              integrates with your workflow and starts delivering value immediately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <SectionWrapper>
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-pink to-purple hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                {/* Step number indicator */}
                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-teal to-pink z-10 hidden md:block" />
                
                <AnimatedElement
                  direction={index % 2 === 0 ? "left" : "right"}
                  className={index % 2 === 1 ? "md:order-2" : ""}
                >
                  <div className="flex items-start gap-6">
                    <div className={`text-6xl md:text-8xl font-bold ${
                      step.variant === "teal" ? "text-teal/20" :
                      step.variant === "pink" ? "text-pink/20" : "text-purple/20"
                    }`}>
                      {step.number}
                    </div>
                    <div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        step.variant === "teal" ? "bg-teal/20" :
                        step.variant === "pink" ? "bg-pink/20" : "bg-purple/20"
                      }`}>
                        <step.icon className={`w-6 h-6 ${
                          step.variant === "teal" ? "text-teal" :
                          step.variant === "pink" ? "text-pink" : "text-purple"
                        }`} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedElement>
                
                <AnimatedElement
                  direction={index % 2 === 0 ? "right" : "left"}
                  className={index % 2 === 1 ? "md:order-1" : ""}
                >
                  <GlassCard variant={step.variant}>
                    <div className="aspect-video flex items-center justify-center">
                      <step.icon className={`w-20 h-20 ${
                        step.variant === "teal" ? "text-teal/30" :
                        step.variant === "pink" ? "text-pink/30" : "text-purple/30"
                      }`} />
                    </div>
                  </GlassCard>
                </AnimatedElement>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Live Demo Section */}
      <SectionWrapper withDots className="relative">
        <GlowOrb color="purple" size="lg" className="absolute -right-20 top-1/2 -translate-y-1/2" />
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement direction="left">
            <span className="text-teal font-medium text-sm tracking-wide uppercase mb-4 block">
              Live Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              See AI{" "}
              <span className="gradient-text">in Action</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Experience the power of natural language interaction. Simply speak or 
              type your commands, and watch SphereStech handle the rest.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <Button variant="heroSecondary" size="lg" className="gap-2">
                <Mic size={18} />
                Voice Mode
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Keyboard size={18} />
                Text Mode
              </Button>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <GlassCard variant="purple" className="relative">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border/30">
                <Sparkles className="w-5 h-5 text-teal" />
                <span className="font-medium text-foreground">SphereStech Assistant</span>
              </div>
              
              <div className="space-y-3">
                {demoCommands.map((command, index) => (
                  <motion.div
                    key={command}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      "{command}"
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-muted/30">
                  <Mic className="w-5 h-5 text-pink" />
                  <span className="text-muted-foreground text-sm">
                    Try saying something...
                  </span>
                </div>
              </div>
            </GlassCard>
          </AnimatedElement>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <GlassCard variant="pink" className="text-center py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to See AI in Action?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the future of productivity with a personalized demo of SphereStech.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              See AI in Action
              <ArrowRight size={20} />
            </Link>
          </Button>
        </GlassCard>
      </SectionWrapper>
    </Layout>
  );
};

export default HowItWorks;
