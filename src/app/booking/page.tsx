"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Clock, Shield, Star } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export default function BookingPage() {
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
            Book Your <span className="gradient-text">Pickup</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Fill out the form below for a free quote, or call/text us for
            instant service.
          </motion.p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">
                  Prefer to Talk?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:8134017657"
                    className="flex items-center gap-3 w-full px-4 py-3 bg-brand-orange text-white rounded-xl font-semibold hover:bg-brand-orange-dark transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call (813) 401-7657
                  </a>
                  <a
                    href="sms:8134017657?body=Hi%20JunkBot!%20I%20need%20a%20quote%20for%20junk%20removal."
                    className="flex items-center gap-3 w-full px-4 py-3 bg-white/5 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Text for Quote
                  </a>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Why JunkBot?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Same Day Service</p>
                      <p className="text-gray-500 text-xs">
                        Most pickups within 2-4 hours
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Upfront Pricing</p>
                      <p className="text-gray-500 text-xs">
                        No hidden fees or surprises
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">5-Star Service</p>
                      <p className="text-gray-500 text-xs">
                        Trusted by Tampa Bay families
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-3">Business Hours</h3>
                <p className="text-gray-400 text-sm">
                  Mon &ndash; Sun | 7:00 AM &ndash; 9:00 PM
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  We respond to quote requests within 15 minutes during business
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
