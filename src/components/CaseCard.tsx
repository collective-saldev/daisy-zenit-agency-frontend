import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CaseCardProps {
  slug: string;
  title: string;
  client: string;
  cover: string;
  tags: string[];
  summary: string;
  index: number;
}

export const CaseCard = ({ slug, title, client, cover, tags, summary, index }: CaseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/work/${slug}`}>
        <div className="card bg-base-100 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 overflow-hidden">
          {/* Cover Image */}
          <figure className="aspect-video overflow-hidden">
            <img
              src={cover}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </figure>

          <div className="card-body">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span key={tag} className="badge badge-primary badge-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="card-title text-2xl">{title}</h3>
            <p className="text-sm text-muted-foreground mb-2">{client}</p>

            {/* Summary */}
            <p className="text-muted-foreground line-clamp-2">{summary}</p>

            {/* CTA */}
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-ghost btn-sm gap-2 group-hover:text-primary">
                View Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
