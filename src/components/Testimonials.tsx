import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Working with this agency transformed our digital presence. The attention to detail and creative solutions exceeded all our expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    content:
      "Their strategic approach and technical expertise helped us achieve a 300% increase in conversions. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    content:
      "The team's creativity and professionalism made the entire project seamless. They truly understand modern design and user experience.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body p-8 sm:p-12">
                <Quote className="w-12 h-12 text-primary mb-4" />
                <p className="text-xl sm:text-2xl mb-8 leading-relaxed">
                  {testimonials[current].content}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full">
                      <img src={testimonials[current].avatar} alt={testimonials[current].name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonials[current].name}</div>
                    <div className="text-muted-foreground">{testimonials[current].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button onClick={prev} className="btn btn-circle btn-sm btn-ghost">
              <ChevronLeft />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-primary w-8" : "bg-base-300"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="btn btn-circle btn-sm btn-ghost">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
