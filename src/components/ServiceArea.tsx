"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";

const areas = [
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Brandon",
  "Riverview",
  "Wesley Chapel",
  "Land O' Lakes",
  "New Tampa",
  "Temple Terrace",
  "Plant City",
  "Valrico",
  "Lutz",
  "Carrollwood",
  "Town 'n' Country",
  "Citrus Park",
  "Oldsmar",
];

export default function ServiceArea() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4">
              Serving <span className="gradient-text">Tampa Bay</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We proudly serve the greater Tampa Bay area and surrounding
              communities. If you&apos;re not sure if we cover your area, give us
              a call!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="font-bold">Open 7 Days a Week</p>
                  <p className="text-gray-400 text-sm">
                    Mon &ndash; Sun | 7 AM &ndash; 9 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <p className="font-bold">2-Hour Arrival Windows</p>
                  <p className="text-gray-400 text-sm">
                    Driver calls 30 min before arrival
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="font-bold">Greater Tampa Bay Area</p>
                  <p className="text-gray-400 text-sm">
                    Hillsborough, Pinellas & Pasco Counties
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Areas grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-orange" />
              Areas We Serve
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-sm text-gray-300 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-green" />
                  {area}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
