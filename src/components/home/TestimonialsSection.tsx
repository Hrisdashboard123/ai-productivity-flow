import { SectionWrapper, SectionTitle } from "@/components/ui/SectionWrapper";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "SphereStech has completely transformed how our team manages tasks. We've seen a 40% increase in productivity since implementing it.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "StartupLab",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "The AI assistant feels like having a personal executive assistant. It anticipates my needs and keeps me organized effortlessly.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateCo",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Voice commands have been a game-changer for me. I can manage my entire workflow while commuting or between meetings.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Senior Consultant",
    company: "Global Advisory",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "The email intelligence feature alone saves me 2 hours daily. It's like having a brilliant assistant who never sleeps.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SectionWrapper className="relative">
      <SectionTitle
        subtitle="Testimonials"
        title="Loved by"
        highlight="Thousands of Professionals"
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <GlassCard
            key={testimonial.name}
            variant={index % 3 === 0 ? "teal" : index % 3 === 1 ? "pink" : "purple"}
            delay={index * 0.1}
            className="flex flex-col"
          >
            <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
            
            <p className="text-foreground/90 text-sm leading-relaxed flex-1 mb-6">
              "{testimonial.content}"
            </p>
            
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-teal text-teal" />
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-teal/30"
              />
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
