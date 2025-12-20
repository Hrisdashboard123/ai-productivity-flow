import { Button } from "@/components/ui/button";
import { GlowOrb, FloatingElement } from "@/components/ui/AnimatedElements";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Calendar, Mail, Mic } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background effects */}
      <GlowOrb color="teal" size="xl" className="-top-40 -right-40" />
      <GlowOrb color="purple" size="lg" className="bottom-20 -left-32" />
      <GlowOrb color="pink" size="md" className="top-1/2 right-1/4" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="container-narrow px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/30 text-teal text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              AI-Powered Productivity
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Work Smarter with Your{" "}
              <span className="gradient-text">AI Productivity</span>{" "}
              Assistant
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Manage tasks, schedules, emails, and reminders effortlessly 
              using AI-powered voice and text interactions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Activate Assistant
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroSecondary" size="xl" asChild>
                <Link to="/how-it-works">
                  <Play size={20} />
                  See How It Works
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: "10K+", label: "Active Users" },
                { value: "50M+", label: "Tasks Managed" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right - Animated visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central AI orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 rounded-full border border-teal/30 border-dashed"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border border-pink/30 border-dashed"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal via-pink to-purple flex items-center justify-center glow-teal">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Floating cards */}
              <FloatingElement className="absolute top-0 left-10" delay={0}>
                <div className="glass-card-teal p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-teal" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Meeting at 3 PM</div>
                      <div className="text-xs text-muted-foreground">Team sync call</div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
              
              <FloatingElement className="absolute bottom-10 left-0" delay={1}>
                <div className="glass-card-pink p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink/20 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-pink" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">3 Priority Emails</div>
                      <div className="text-xs text-muted-foreground">Ready to review</div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
              
              <FloatingElement className="absolute top-20 right-0" delay={2}>
                <div className="glass-card-purple p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple/20 flex items-center justify-center">
                      <Mic className="w-4 h-4 text-purple" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">"Create task..."</div>
                      <div className="text-xs text-muted-foreground">Voice command</div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
