import { motion } from "framer-motion";

function BackgroundEffects() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,black_38%,transparent_85%)]" />

      <motion.div
        animate={{
          x: [0, 12, -8, 0],
          y: [0, -10, 14, 0]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]"
      />
      <motion.div
        animate={{
          x: [0, -16, 10, 0],
          y: [0, 18, -12, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, 8, -10, 0],
          y: [0, 10, -14, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]"
      />
    </div>
  );
}

export default BackgroundEffects;
