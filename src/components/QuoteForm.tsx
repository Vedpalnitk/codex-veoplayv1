"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Upload } from "lucide-react";

const serviceOptions = [
  "Furniture Removal",
  "Appliance Removal",
  "Yard Debris",
  "Construction Debris",
  "Estate Cleanout",
  "Commercial Junk",
  "Hot Tub / Shed Removal",
  "General Junk",
  "Other",
];

const timeOptions = [
  "As soon as possible",
  "Today",
  "Tomorrow",
  "This week",
  "I'm flexible",
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-12 text-center"
      >
        <CheckCircle className="w-16 h-16 text-brand-green mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Quote Request Sent!</h3>
        <p className="text-gray-400 mb-6">
          We&apos;ll get back to you within 15 minutes during business hours. For
          faster service, call us at{" "}
          <a href="tel:8134017657" className="text-brand-orange font-semibold">
            (813) 401-7657
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-white/5 border border-white/20 rounded-xl text-sm font-medium hover:bg-white/10 transition-all"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8">
      <h3 className="text-xl font-bold mb-6">Get Your Free Quote</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            required
            placeholder="(813) 555-0123"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Service Needed *
        </label>
        <select
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-orange/50 transition-colors"
        >
          <option value="" className="bg-brand-dark">
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option} className="bg-brand-dark">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          When do you need us? *
        </label>
        <select
          required
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-orange/50 transition-colors"
        >
          <option value="" className="bg-brand-dark">
            Select timing
          </option>
          {timeOptions.map((option) => (
            <option key={option} value={option} className="bg-brand-dark">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Address / Location *
        </label>
        <input
          type="text"
          required
          placeholder="123 Main St, Tampa, FL"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Describe your junk
        </label>
        <textarea
          rows={3}
          placeholder="Tell us what you need removed (e.g., old couch, broken fridge, yard debris...)"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
        />
      </div>

      {/* Photo upload placeholder */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Upload Photos (optional)
        </label>
        <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-brand-orange/30 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-gray-500 mx-auto mb-2" />
          <p className="text-gray-500 text-sm">
            Drag photos here or click to upload
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Photos help us give a more accurate quote
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-brand-orange text-white rounded-xl font-bold text-lg hover:bg-brand-orange-dark transition-all"
      >
        <Send className="w-5 h-5" />
        Get My Free Quote
      </button>
    </form>
  );
}
