import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withGrid?: boolean;
  withDots?: boolean;
}

export const SectionWrapper = ({
  children,
  className,
  id,
  withGrid = false,
  withDots = false,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative overflow-hidden",
        withGrid && "bg-grid",
        withDots && "bg-dots",
        className
      )}
    >
      <div className="container-narrow relative z-10">{children}</div>
    </section>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  centered?: boolean;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  highlight,
  centered = true,
  className,
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      {subtitle && (
        <span className="inline-block text-teal font-medium text-sm md:text-base mb-4 tracking-wide uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>
    </motion.div>
  );
};
