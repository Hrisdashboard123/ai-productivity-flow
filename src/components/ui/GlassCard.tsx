import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "teal" | "pink" | "purple";
  hover?: boolean;
  delay?: number;
}

const variantStyles = {
  default: "glass-card",
  teal: "glass-card-teal",
  pink: "glass-card-pink",
  purple: "glass-card-purple",
};

export const GlassCard = ({
  children,
  className,
  variant = "default",
  hover = true,
  delay = 0,
}: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={cn(
        variantStyles[variant],
        "p-6 md:p-8 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
