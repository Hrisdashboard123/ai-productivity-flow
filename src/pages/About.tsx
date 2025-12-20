import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedElement, GlowOrb } from "@/components/ui/AnimatedElements";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Rocket,
  Award,
  ArrowRight,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI to deliver cutting-edge productivity solutions.",
    variant: "teal" as const,
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Every feature is designed with our users in mind, ensuring intuitive and delightful experiences.",
    variant: "pink" as const,
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We truly care about helping professionals reclaim their time and focus on what matters most.",
    variant: "purple" as const,
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we build and every interaction we have.",
    variant: "teal" as const,
  },
];

const milestones = [
  { year: "2021", title: "Founded", description: "SphereStech was born with a vision to revolutionize productivity" },
  { year: "2022", title: "First Product", description: "Launched our AI assistant to early adopters" },
  { year: "2023", title: "10K Users", description: "Reached 10,000 active users milestone" },
  { year: "2024", title: "Enterprise Launch", description: "Expanded to serve enterprise customers" },
  { year: "2025", title: "Global Expansion", description: "Now serving professionals in 50+ countries" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <GlowOrb color="purple" size="xl" className="-top-40 right-0" />
        <GlowOrb color="teal" size="lg" className="bottom-20 -left-32" />
        
        <div className="container-narrow px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-teal font-medium text-sm tracking-wide uppercase mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Empowering Professionals to{" "}
              <span className="gradient-text">Focus on What Matters</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're on a mission to free professionals from the burden of 
              administrative tasks and let AI handle the busy work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedElement direction="left">
            <GlassCard variant="teal" className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-teal" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower every professional with an AI assistant that handles 
                routine tasks, manages complex workflows, and provides intelligent 
                insights – so they can focus on high-impact work that truly matters.
              </p>
            </GlassCard>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <GlassCard variant="pink" className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink/20 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-pink" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                A world where AI assistants seamlessly handle everyday productivity 
                challenges, giving professionals back hours of their day and enabling 
                them to achieve their full potential.
              </p>
            </GlassCard>
          </AnimatedElement>
        </div>
      </SectionWrapper>

      {/* Story */}
      <SectionWrapper withGrid className="relative">
        <GlowOrb color="pink" size="md" className="absolute -left-20 top-1/2 -translate-y-1/2" />
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedElement direction="left">
            <span className="text-teal font-medium text-sm tracking-wide uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Born from a Simple{" "}
              <span className="gradient-text">Frustration</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SphereStech was founded by a team of professionals who were tired of 
                spending hours on administrative tasks that pulled them away from 
                meaningful work.
              </p>
              <p>
                We asked ourselves: "What if AI could handle all the busy work – the 
                scheduling, the email sorting, the task management – so we could focus 
                on what we do best?"
              </p>
              <p>
                That question led to the creation of SphereStech: an AI-powered 
                productivity assistant that understands context, learns preferences, 
                and works tirelessly to keep professionals organized and efficient.
              </p>
              <p>
                Today, we're proud to serve thousands of professionals worldwide, 
                helping them reclaim hours of their day and achieve more than they 
                ever thought possible.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement direction="right">
            <GlassCard variant="purple">
              <div className="aspect-video flex items-center justify-center">
                <Rocket className="w-24 h-24 text-purple/40" />
              </div>
            </GlassCard>
          </AnimatedElement>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <AnimatedElement>
            <span className="text-teal font-medium text-sm tracking-wide uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </AnimatedElement>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <GlassCard
              key={value.title}
              variant={value.variant}
              delay={index * 0.1}
              className="text-center"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                value.variant === "teal" ? "bg-teal/20" :
                value.variant === "pink" ? "bg-pink/20" : "bg-purple/20"
              }`}>
                <value.icon className={`w-7 h-7 ${
                  value.variant === "teal" ? "text-teal" :
                  value.variant === "pink" ? "text-pink" : "text-purple"
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {value.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper withDots>
        <div className="text-center mb-12">
          <AnimatedElement>
            <span className="text-teal font-medium text-sm tracking-wide uppercase mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Key Milestones
            </h2>
          </AnimatedElement>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal via-pink to-purple" />
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <AnimatedElement
                key={milestone.year}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-teal z-10" />
                  
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}>
                    <span className="text-teal font-bold text-xl">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <GlassCard variant="teal" className="text-center py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Join Our Mission
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Be part of the productivity revolution. Start using SphereStech today.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get Started
              <ArrowRight size={20} />
            </Link>
          </Button>
        </GlassCard>
      </SectionWrapper>
    </Layout>
  );
};

export default About;
