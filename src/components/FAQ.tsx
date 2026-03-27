"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can you come?",
    answer:
      "We offer same-day service! Most pickups happen within 2-4 hours of booking. We'll give you a 2-hour arrival window and our driver will call or text you 30 minutes before arrival.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the volume of junk (how much space it takes in our truck), labor involved, disposal costs, and urgency. We always provide an upfront quote before we start — no hidden fees or surprises.",
  },
  {
    question: "What items do you NOT take?",
    answer:
      "We cannot accept hazardous materials like asbestos, chemicals, paint, medical waste, or bio-hazardous materials. If you're unsure, just ask us and we'll let you know!",
  },
  {
    question: "Do I need to be home during pickup?",
    answer:
      "Not always! If your items are accessible (like in a garage, driveway, or yard), we can pick up without you being present. Just let us know the situation when booking.",
  },
  {
    question: "Do you recycle or donate items?",
    answer:
      "Yes! We're committed to eco-friendly disposal. We donate usable items to local charities and recycle as much as possible. Only items that can't be reused or recycled go to the landfill.",
  },
  {
    question: "Are you insured?",
    answer:
      "Absolutely. JunkBot LLC is fully insured for your protection. You can rest easy knowing your property is safe during our work.",
  },
  {
    question: "How do I get a quote via text?",
    answer:
      "Simply text us at (813) 401-7657 with photos of the items you need removed. We'll respond with an upfront price within minutes. It's the fastest way to get a quote!",
  },
  {
    question: "What areas do you service?",
    answer:
      "We serve the greater Tampa Bay area including Tampa, St. Petersburg, Clearwater, Brandon, Riverview, Wesley Chapel, and surrounding communities in Hillsborough, Pinellas, and Pasco counties.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-brand-dark/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about our junk removal service.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-sm pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
