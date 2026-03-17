import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{description}</p>}
    </motion.div>
  );
}

export default SectionHeading;
