"use client";

import { motion } from "framer-motion";
import {
  Sofa,
  Monitor,
  TreeDeciduous,
  Hammer,
  Home,
  Building2,
  Trash2,
  Warehouse,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Sofa,
    title: "Furniture Removal",
    description:
      "Whether it's a single couch or an entire household of furniture, we handle it all. Our team carefully removes furniture from any room, navigating stairs, tight hallways, and doorways with ease.",
    items: [
      "Sofas, couches & loveseats",
      "Mattresses, box springs & bed frames",
      "Tables, chairs & dining sets",
      "Dressers, desks & bookshelves",
      "Patio furniture & outdoor sets",
      "Recliners & entertainment centers",
    ],
  },
  {
    icon: Monitor,
    title: "Appliance Removal",
    description:
      "Old, broken, or unwanted appliances? We safely disconnect (when applicable) and haul away any household appliance, no matter the size or weight.",
    items: [
      "Refrigerators & freezers",
      "Washers & dryers",
      "Dishwashers & ovens",
      "AC units & water heaters",
      "Microwaves & small appliances",
      "TVs & electronics",
    ],
  },
  {
    icon: TreeDeciduous,
    title: "Yard Debris Removal",
    description:
      "Storm damage? Landscaping project? We clean up all types of yard waste so you can enjoy your outdoor space again.",
    items: [
      "Tree branches & limbs",
      "Lawn clippings & leaves",
      "Storm & hurricane debris",
      "Landscaping waste & dirt",
      "Stumps & root balls",
      "Fence sections & lattice",
    ],
  },
  {
    icon: Hammer,
    title: "Construction Debris",
    description:
      "Renovation projects create a lot of waste. We haul away all types of construction and demolition debris so your project stays on track.",
    items: [
      "Drywall & sheetrock",
      "Lumber & plywood",
      "Concrete, brick & tile",
      "Roofing materials & shingles",
      "Carpet & flooring",
      "Cabinets & countertops",
    ],
  },
  {
    icon: Home,
    title: "Estate & Home Cleanouts",
    description:
      "We provide compassionate, thorough cleanout services for estates, foreclosures, and move-outs. Let us handle the heavy lifting during difficult times.",
    items: [
      "Full home cleanouts",
      "Apartment & condo turnovers",
      "Hoarding cleanup",
      "Foreclosure cleanouts",
      "Move-out cleanups",
      "Garage & attic clearing",
    ],
  },
  {
    icon: Building2,
    title: "Commercial Junk Removal",
    description:
      "We work with businesses of all sizes to remove office furniture, equipment, and warehouse inventory. Flexible scheduling to minimize disruption.",
    items: [
      "Office furniture & cubicles",
      "IT equipment & servers",
      "Warehouse cleanouts",
      "Retail fixtures & displays",
      "Restaurant equipment",
      "Storage unit cleanouts",
    ],
  },
  {
    icon: Warehouse,
    title: "Hot Tub, Shed & Structure Removal",
    description:
      "We dismantle and haul away hot tubs, sheds, playsets, and other backyard structures. Full demolition and removal included.",
    items: [
      "Hot tubs & spas",
      "Sheds & storage buildings",
      "Playsets & swing sets",
      "Above-ground pools",
      "Decks & small structures",
      "Fencing & pergolas",
    ],
  },
  {
    icon: Trash2,
    title: "General Junk Removal",
    description:
      "Got a mix of stuff? No problem. We take almost anything that's not hazardous. If you can point to it, we can probably remove it.",
    items: [
      "Garage cleanouts",
      "Attic & basement clearing",
      "Miscellaneous household items",
      "Exercise equipment",
      "Boxes & packaging",
      "Toys, bikes & sporting goods",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            From a single item to a full property cleanout, JunkBot handles it
            all. Fast, affordable, and eco-friendly.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`glass-card rounded-2xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="tel:8134017657"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-xl font-semibold hover:bg-brand-orange-dark transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Get Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-4">
                  What We Remove
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Don&apos;t See Your Item?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            We remove almost everything. If you&apos;re not sure, just ask! Call
            or text us and we&apos;ll let you know.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8134017657"
              className="flex items-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold hover:bg-brand-orange-dark transition-all"
            >
              <Phone className="w-5 h-5" />
              Call (813) 401-7657
            </a>
            <Link
              href="/booking"
              className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              Book Online
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
