import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

const WorkDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/work" className="btn btn-primary">
            Back to Work
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/work" className="btn btn-ghost btn-sm gap-2 mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.tags.map((tag) => (
                <span key={tag} className="badge badge-primary">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-4">{caseStudy.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div>
                <span className="font-semibold text-foreground">Client:</span> {caseStudy.client}
              </div>
              <div>
                <span className="font-semibold text-foreground">Year:</span> {caseStudy.year}
              </div>
            </div>

            <p className="text-xl text-muted-foreground">{caseStudy.summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src={caseStudy.cover}
            alt={caseStudy.title}
            className="w-full rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Services Provided</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.services.map((service) => (
                <span key={service} className="badge badge-lg badge-outline">
                  {service}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Key Outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {caseStudy.outcomes.map((outcome, index) => (
                <div key={index} className="card bg-base-200 shadow-lg">
                  <div className="card-body">
                    <p className="text-lg font-semibold">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Images */}
          {caseStudy.images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {caseStudy.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${caseStudy.title} ${index + 2}`}
                  className="rounded-2xl shadow-lg"
                />
              ))}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card bg-gradient-to-r from-primary to-accent text-primary-foreground"
          >
            <div className="card-body text-center">
              <h3 className="card-title text-3xl justify-center mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-lg mb-6">Let's create something amazing together</p>
              <div className="card-actions justify-center">
                <Link to="/contact" className="btn btn-neutral btn-lg gap-2">
                  Get in Touch
                  <ExternalLink className="w-5 h-5" />
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

export default WorkDetail;
