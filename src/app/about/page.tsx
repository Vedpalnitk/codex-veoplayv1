"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  Clock,
  Heart,
  Users,
  Truck,
  Award,
  Target,
} from "lucide-react";

const values = [
  {
    icon: Clock,
    title: "Reliability",
    description:
      "We show up on time, every time. Our 2-hour arrival windows and 30-minute courtesy calls mean you're never left waiting.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description:
      "No hidden fees, no bait-and-switch. We give you an upfront price before we lift a single item.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "We donate reusable items and recycle everything we can. Landfill is always our last resort.",
  },
  {
    icon: Heart,
    title: "Community First",
    description:
      "As a local Tampa business, we're invested in keeping our community clean and beautiful.",
  },
];

const stats = [
  { number: "500+", label: "Jobs Completed" },
  { number: "5.0", label: "Star Rating" },
  { number: "60%", label: "Items Recycled/Donated" },
  { number: "7", label: "Days a Week" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            >
              About <span className="gradient-text">JunkBot</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              JunkBot LLC is a locally owned and operated junk removal company
              serving the greater Tampa Bay area. We started with a simple
              mission: make junk removal fast, affordable, and hassle-free for
              homeowners and businesses alike.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl sm:text-5xl font-black gradient-text mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  JunkBot was born out of frustration with the junk removal
                  industry. Hidden fees, unreliable scheduling, and careless
                  service were the norm — and we knew Tampa Bay deserved better.
                </p>
                <p>
                  We built JunkBot on three pillars: speed, transparency, and
                  environmental responsibility. Whether you need a single
                  mattress picked up or an entire estate cleaned out, we treat
                  every job with the same level of care and professionalism.
                </p>
                <p>
                  Our commitment to the community goes beyond just hauling junk.
                  We partner with local charities to donate usable items and
                  work with certified recycling facilities to minimize landfill
                  waste. When you choose JunkBot, you&apos;re choosing a cleaner
                  Tampa Bay.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                <Truck className="w-10 h-10 text-brand-orange mb-3" />
                <p className="font-bold text-sm">Fast Service</p>
                <p className="text-gray-500 text-xs mt-1">Same day available</p>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                <Award className="w-10 h-10 text-brand-gold mb-3" />
                <p className="font-bold text-sm">Top Rated</p>
                <p className="text-gray-500 text-xs mt-1">5-star reviews</p>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                <Users className="w-10 h-10 text-brand-teal mb-3" />
                <p className="font-bold text-sm">Local Team</p>
                <p className="text-gray-500 text-xs mt-1">Tampa Bay natives</p>
              </div>
              <div className="glass-card rounded-2xl p-6 flex flex-col items-center text-center">
                <Target className="w-10 h-10 text-purple-400 mb-3" />
                <p className="font-bold text-sm">Mission Driven</p>
                <p className="text-gray-500 text-xs mt-1">Community focused</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
