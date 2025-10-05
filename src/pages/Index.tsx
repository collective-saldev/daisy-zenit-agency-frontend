import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseCard } from "@/components/CaseCard";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Palette, TrendingUp, Smartphone } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies",
    features: [
      "React & Next.js development",
      "Progressive Web Apps",
      "API integration",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design systems",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven strategies that drive growth",
    features: [
      "SEO optimization",
      "Content marketing",
      "Analytics & reporting",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile solutions",
    features: [
      "iOS & Android apps",
      "React Native",
      "App store optimization",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoMarquee />

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Do Best</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-base-200/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out some of our recent projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((caseStudy, index) => (
              <CaseCard key={caseStudy.slug} {...caseStudy} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/work" className="btn btn-outline btn-lg">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-r from-primary to-accent text-primary-foreground text-center"
          >
            <div className="card-body py-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create something extraordinary together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn btn-neutral btn-lg">
                  Start Your Project
                </Link>
                <Link to="/pricing" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary">
                  View Pricing
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
