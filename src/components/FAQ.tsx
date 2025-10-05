import { motion } from "framer-motion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope, but a standard website typically takes 6-8 weeks from kickoff to launch. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! All our packages include post-launch support. We offer maintenance packages for ongoing updates, security patches, and technical support to keep your site running smoothly.",
  },
  {
    question: "Can you help with content creation?",
    answer:
      "Absolutely. We offer content strategy, copywriting, and content creation services. Our team can help develop compelling content that resonates with your target audience.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "We typically work with a 50% deposit upfront and 50% upon project completion. For larger projects, we can arrange milestone-based payments.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "Yes! We work with clients worldwide. Our team is experienced in remote collaboration using modern project management tools and regular video calls.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-base-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="collapse collapse-plus bg-base-100 shadow-lg"
            >
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
              <div className="collapse-title text-xl font-medium">{faq.question}</div>
              <div className="collapse-content">
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
