"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Tampa, FL",
    text: "JunkBot was incredible! They showed up within an hour and had my entire garage cleaned out in no time. Professional, fast, and super affordable.",
    rating: 5,
  },
  {
    name: "Mike R.",
    location: "Brandon, FL",
    text: "Best junk removal service in Tampa. The guys were respectful, on time, and even swept up after themselves. Will definitely use again!",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    location: "St. Petersburg, FL",
    text: "Had a major estate cleanout after my parents moved. JunkBot handled everything with care and compassion. Highly recommend!",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Clearwater, FL",
    text: "Needed same-day removal for old appliances. They were at my door in 2 hours and the price was exactly what they quoted. No surprises!",
    rating: 5,
  },
  {
    name: "Amanda T.",
    location: "Riverview, FL",
    text: "Used JunkBot for construction debris after our renovation. They handled heavy materials with no issue. Great communication throughout.",
    rating: 5,
  },
  {
    name: "Carlos P.",
    location: "Wesley Chapel, FL",
    text: "The text-for-quote feature is so convenient. Sent a photo, got a price in minutes, and they came the same day. This is how business should be done!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-gray-400 text-lg">
            Real reviews from real Tampa Bay customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <Quote className="w-8 h-8 text-brand-orange/30 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              <div>
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
