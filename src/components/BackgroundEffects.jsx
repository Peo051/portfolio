import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function BackgroundEffects() {
  const { scrollYProgress } = useScroll();

  const farY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -180]), {
    stiffness: 42,
    damping: 24,
    mass: 0.4
  });
  const midY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 48,
    damping: 22,
    mass: 0.35
  });
  const nearY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -68]), {
    stiffness: 58,
    damping: 20,
    mass: 0.3
  });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: farY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.16),transparent_33%),radial-gradient(circle_at_82%_12%,rgba(99,102,241,0.2),transparent_36%),radial-gradient(circle_at_72%_80%,rgba(139,92,246,0.16),transparent_34%)]" />
      </motion.div>

      <motion.div style={{ y: midY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.055)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_82%)]" />
      </motion.div>

      <motion.div style={{ y: nearY }} className="absolute inset-0">
        <div className="absolute left-[7%] top-[20%] h-56 w-56 rounded-full bg-cyan-400/16 blur-[120px]" />
        <div className="absolute right-[8%] top-[28%] h-64 w-64 rounded-full bg-indigo-500/16 blur-[130px]" />
        <div className="absolute bottom-[-8%] left-[33%] h-80 w-80 rounded-full bg-violet-500/14 blur-[140px]" />
      </motion.div>

      <motion.div
        animate={{ x: [0, 20, -16, 0], y: [0, -16, 12, 0], rotate: [0, 5, -4, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[14%] top-[62%] h-20 w-20 rounded-[28%] border border-sky-300/30 bg-sky-400/8"
      />
      <motion.div
        animate={{ x: [0, -16, 20, 0], y: [0, 14, -12, 0], rotate: [0, -6, 4, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[14%] top-[70%] h-16 w-16 rounded-[22%] border border-indigo-300/30 bg-indigo-500/8"
      />
    </div>
  );
}

export default BackgroundEffects;
