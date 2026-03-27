"use client";

import { motion } from "framer-motion";
import { MessageSquare, Camera, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Get a Quote",
    description:
      "Call, text, or book online. Send us photos of your junk for an instant estimate.",
    color: "from-brand-orange to-brand-gold",
  },
  {
    icon: Camera,
    title: "Send Photos",
    description:
      "Snap a picture of the items you need removed. We'll give you an upfront price — no surprises.",
    color: "from-brand-teal to-cyan-400",
  },
  {
    icon: Truck,
    title: "We Show Up",
    description:
      "We arrive within your 2-hour window. Our driver calls or texts 30 minutes before arrival.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Junk Gone!",
    description:
      "We load, haul, and dispose of everything responsibly. You enjoy your clean space.",
    color: "from-brand-green to-emerald-400",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Getting rid of junk has never been easier. Four simple steps to a
            clutter-free space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 text-center hover:bg-white/10 transition-all group">
                {/* Step number */}
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
