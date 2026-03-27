"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-brand-gold" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHYyaC0ydjRoMnYyaDR2LTJ6TTYgNEg0VjBINnY0ek02IDRINFYwSDZ2NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Get Rid of Your Junk?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Don&apos;t let clutter weigh you down. Get a free quote in minutes
              and we&apos;ll have it gone today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8134017657"
                className="flex items-center gap-3 px-8 py-4 bg-white text-brand-orange rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all"
              >
                <Phone className="w-5 h-5" />
                (813) 401-7657
              </a>

              <a
                href="sms:8134017657?body=Hi%20JunkBot!%20I%20need%20a%20quote%20for%20junk%20removal."
                className="flex items-center gap-3 px-8 py-4 bg-white/20 text-white border-2 border-white/40 rounded-2xl font-bold text-lg hover:bg-white/30 transition-all"
              >
                <MessageSquare className="w-5 h-5" />
                Text Us
              </a>

              <Link
                href="/booking"
                className="flex items-center gap-3 px-8 py-4 bg-brand-darker text-white rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all"
              >
                Book Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
