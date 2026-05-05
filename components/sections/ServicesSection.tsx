"use client";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { motion } from "motion/react";
import { BrainCircuit, Cpu, Database, LayoutTemplate, MessageSquare, Network, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Product Development",
    description: "End-to-end development of AI-native products designed to solve complex business challenges with intelligent logic.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "Streamline workflows and eliminate manual processes with smart, adaptive automation systems.",
  },
  {
    icon: LayoutTemplate,
    title: "SaaS Platforms",
    description: "Scalable, high-performance SaaS architectures built with modern frameworks and robust backends.",
  },
  {
    icon: MessageSquare,
    title: "AI Chat Systems",
    description: "Context-aware conversational agents that understand user intent and integrate seamlessly into your workflows.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights through machine learning pipelines and predictive analytics.",
  },
  {
    icon: Network,
    title: "Workflow Optimization",
    description: "Identify bottlenecks and re-engineer processes with AI to maximize efficiency and resource allocation.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description: "Premium digital experiences that perform flawlessly across devices, engaging users with intuitive design.",
  },
  {
    icon: Cpu,
    title: "Cloud-Scale Systems",
    description: "Resilient infrastructure and microservices designed to scale effortlessly with your business growth.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What We Build
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-secondary"
          >
            We combine world-class engineering with advanced artificial intelligence to deliver solutions that drive immediate business value and long-term scalability.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <PremiumCard className="p-6 h-full flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </PremiumCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
