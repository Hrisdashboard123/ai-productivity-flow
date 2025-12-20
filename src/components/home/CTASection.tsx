import { Button } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/AnimatedElements";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-bg-cta opacity-90" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Glow effects */}
      <GlowOrb color="teal" size="lg" className="-left-20 top-0" />
      <GlowOrb color="pink" size="md" className="right-10 bottom-10" />
      
      <div className="container-narrow px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
          >
            <Sparkles size={16} />
            Ready to Transform Your Productivity?
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Let AI Handle the{" "}
            <span className="text-teal text-glow-teal">Busy Work</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who have already transformed their 
            workflow with SphereStech. Start your free trial today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-white text-purple font-bold hover:bg-white/90 hover:scale-105 transition-all shadow-xl"
              asChild
            >
              <Link to="/contact">
                Get Started with SphereStech
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              variant="glass"
              size="xl"
              asChild
            >
              <Link to="/features">
                Explore Features
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-white/60 mt-6">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};
