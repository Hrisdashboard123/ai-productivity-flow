import { Layout } from "@/components/layout";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedElement, GlowOrb } from "@/components/ui/AnimatedElements";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Calendar,
  User,
  Building,
  Users,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@spherestech.com",
    link: "mailto:hello@spherestech.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    link: "#",
  },
];

const categories = [
  { value: "individual", label: "Individual", icon: User },
  { value: "team", label: "Team", icon: Users },
  { value: "enterprise", label: "Enterprise", icon: Building },
];

const Contact = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("individual");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <GlowOrb color="teal" size="xl" className="-top-40 -right-40" />
        <GlowOrb color="pink" size="lg" className="bottom-0 -left-32" />
        
        <div className="container-narrow px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-teal font-medium text-sm tracking-wide uppercase mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Start a{" "}
              <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions about SphereStech? Want a personalized demo? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <AnimatedElement direction="left" className="lg:col-span-3">
            <GlassCard variant="teal">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send us a message
              </h2>
              
              {/* Category selector */}
              <div className="mb-6">
                <Label className="text-foreground mb-3 block">I am a/an:</Label>
                <div className="grid grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      type="button"
                      onClick={() => setSelectedCategory(category.value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                        selectedCategory === category.value
                          ? "border-teal bg-teal/10 text-teal"
                          : "border-border bg-transparent text-muted-foreground hover:border-teal/50"
                      }`}
                    >
                      <category.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-muted/30 border-border focus:border-teal"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-muted/30 border-border focus:border-teal"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">Company (optional)</Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-muted/30 border-border focus:border-teal"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-muted/30 border-border focus:border-teal resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </AnimatedElement>
          
          {/* Contact Info */}
          <AnimatedElement direction="right" className="lg:col-span-2 space-y-6">
            {/* Contact details */}
            <GlassCard variant="pink">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Get in touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-pink/20 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-pink" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
            
            {/* Quick actions */}
            <GlassCard variant="purple">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Quick actions
              </h3>
              <div className="space-y-3">
                <Button variant="glass" className="w-full justify-start gap-3" asChild>
                  <a href="#">
                    <Calendar className="w-5 h-5" />
                    Schedule a Demo
                  </a>
                </Button>
                <Button variant="glass" className="w-full justify-start gap-3" asChild>
                  <a href="#">
                    <MessageSquare className="w-5 h-5" />
                    Chat with AI Support
                  </a>
                </Button>
              </div>
            </GlassCard>
            
            {/* Response time */}
            <div className="glass-card p-6 text-center">
              <p className="text-muted-foreground text-sm">
                Average response time
              </p>
              <p className="text-2xl font-bold text-teal">
                Under 2 hours
              </p>
            </div>
          </AnimatedElement>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
