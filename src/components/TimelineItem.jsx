import { motion } from "framer-motion";

function TimelineItem({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="relative pl-10"
    >
      <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-[0_0_16px_rgba(56,189,248,0.7)]" />
      <span className="absolute left-[5px] top-5 h-[calc(100%-4px)] w-px bg-gradient-to-b from-sky-300/50 to-transparent" />

      <p className="font-mono text-xs uppercase tracking-[0.14em] text-sky-300/80">{item.year}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-100">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
    </motion.article>
  );
}

export default TimelineItem;
