import { motion } from "framer-motion";

const logos = [
  "TechCorp",
  "StartupXYZ",
  "InnovateLab",
  "DigitalFlow",
  "CloudNine",
  "DataSync",
  "WebGenius",
  "AppMasters",
];

export const LogoMarquee = () => {
  return (
    <section className="py-16 bg-base-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-center text-muted-foreground font-medium">
          Trusted by industry leaders
        </h2>
      </div>
      <div className="relative">
        <div className="flex">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-16"
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[200px] h-20 text-2xl font-bold text-muted-foreground/50"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
