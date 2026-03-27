"use client";

import { motion } from "framer-motion";
import {
  Sofa,
  Home,
  Hammer,
  TreeDeciduous,
  Monitor,
  Warehouse,
  Trash2,
  Building2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Sofa,
    title: "Furniture Removal",
    description:
      "Couches, beds, tables, dressers — we remove any furniture, any size.",
    items: ["Sofas & Couches", "Mattresses & Beds", "Tables & Chairs", "Dressers & Desks"],
  },
  {
    icon: Monitor,
    title: "Appliance Removal",
    description:
      "Old fridges, washers, dryers, and more. We handle the heavy lifting.",
    items: ["Refrigerators", "Washers & Dryers", "Dishwashers", "AC Units"],
  },
  {
    icon: TreeDeciduous,
    title: "Yard Debris",
    description:
      "Branches, leaves, stumps, and storm debris. We clean up your yard.",
    items: ["Tree Branches", "Lawn Clippings", "Storm Debris", "Landscaping Waste"],
  },
  {
    icon: Hammer,
    title: "Construction Debris",
    description:
      "Renovation scraps, drywall, lumber, tile — we haul it all away.",
    items: ["Drywall & Lumber", "Concrete & Tile", "Roofing Materials", "Renovation Waste"],
  },
  {
    icon: Home,
    title: "Estate Cleanouts",
    description:
      "Full home or apartment cleanouts. Compassionate, efficient service.",
    items: ["Whole Home Cleanouts", "Apartment Turnovers", "Hoarding Cleanup", "Foreclosure Cleanouts"],
  },
  {
    icon: Building2,
    title: "Commercial Junk",
    description:
      "Office furniture, equipment, and warehouse cleanouts for businesses.",
    items: ["Office Furniture", "IT Equipment", "Warehouse Cleanout", "Retail Fixtures"],
  },
  {
    icon: Trash2,
    title: "General Junk",
    description:
      "Miscellaneous items, garage cleanouts, attic clearing, and more.",
    items: ["Garage Cleanout", "Attic Clearing", "Storage Units", "Miscellaneous Items"],
  },
  {
    icon: Warehouse,
    title: "Hot Tub & Shed",
    description:
      "Hot tub removal, shed demolition, and above-ground pool teardown.",
    items: ["Hot Tubs & Spas", "Sheds & Playsets", "Above-Ground Pools", "Decks & Fencing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            What We <span className="gradient-text">Remove</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            If you can point to it, we can remove it. Here are some of our most
            popular services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors">
                <service.icon className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs text-gray-500 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-xl text-sm font-medium hover:bg-white/10 transition-all"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
