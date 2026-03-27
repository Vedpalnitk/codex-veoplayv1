"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Single Item",
    price: "$75",
    suffix: "+",
    description: "Perfect for one or two items",
    features: [
      "1-2 items pickup",
      "Same day service",
      "Upfront pricing",
      "Eco-friendly disposal",
    ],
    popular: false,
  },
  {
    name: "Partial Load",
    price: "$199",
    suffix: "+",
    description: "Ideal for a room cleanout",
    features: [
      "Up to 1/4 truck",
      "Same day service",
      "Upfront pricing",
      "Eco-friendly disposal",
      "30 min arrival notice",
    ],
    popular: true,
  },
  {
    name: "Full Load",
    price: "$399",
    suffix: "+",
    description: "Whole room or garage cleanout",
    features: [
      "Up to 1/2 truck",
      "Same day service",
      "Upfront pricing",
      "Eco-friendly disposal",
      "30 min arrival notice",
      "Sweep up after",
    ],
    popular: false,
  },
  {
    name: "Full Truck",
    price: "$599",
    suffix: "+",
    description: "Major cleanouts & big jobs",
    features: [
      "Full truck load",
      "Same day service",
      "Upfront pricing",
      "Eco-friendly disposal",
      "30 min arrival notice",
      "Sweep up after",
      "Priority scheduling",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees. Pricing is based on volume, labor, disposal costs,
            and urgency. Get an exact quote before we start.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 transition-all ${
                tier.popular
                  ? "bg-gradient-to-b from-brand-orange/20 to-brand-orange/5 border-2 border-brand-orange/40"
                  : "glass-card hover:bg-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-orange rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-lg font-bold mb-1">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{tier.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className="text-gray-400 text-lg">{tier.suffix}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <Check className="w-4 h-4 text-brand-green shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="tel:8134017657"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  tier.popular
                    ? "bg-brand-orange text-white hover:bg-brand-orange-dark"
                    : "bg-white/5 border border-white/20 hover:bg-white/10"
                }`}
              >
                Get Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          * Exact pricing depends on item type, weight, and disposal
          requirements. Minimum charge applies.
        </motion.p>
      </div>
    </section>
  );
}
