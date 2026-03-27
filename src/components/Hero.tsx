"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  ArrowRight,
  Clock,
  Shield,
  Leaf,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-darker via-brand-dark to-brand-darker" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-medium mb-8"
          >
            <Star className="w-4 h-4 fill-brand-orange" />
            Tampa&apos;s #1 Rated Junk Removal Service
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          >
            <span className="block">Same Day</span>
            <span className="gradient-text">Junk Removal</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            We haul it all — furniture, appliances, yard debris, construction
            waste. Upfront pricing, eco-friendly disposal, and a 2-hour arrival
            window. Serving the greater Tampa Bay area.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href="tel:8134017657"
              className="group flex items-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold text-lg hover:bg-brand-orange-dark transition-all animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Call For Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="sms:8134017657?body=Hi%20JunkBot!%20I%20need%20a%20quote%20for%20junk%20removal."
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Text For Quote
            </a>

            <Link
              href="/booking"
              className="group flex items-center gap-3 px-8 py-4 bg-brand-teal text-white rounded-2xl font-bold text-lg hover:bg-brand-teal-dark transition-all"
            >
              Book Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-medium">2-Hour Window</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Leaf className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-medium">Eco-Friendly</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Star className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-medium">5-Star Rated</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-darker to-transparent" />
    </section>
  );
}
