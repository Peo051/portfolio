import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function BackgroundEffects() {
  const { scrollYProgress } = useScroll();

  const deepLayerY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -180]), {
    stiffness: 45,
    damping: 24,
    mass: 0.4
  });
  const midLayerY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), {
    stiffness: 52,
    damping: 24,
    mass: 0.35
  });
  const nearLayerY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -70]), {
    stiffness: 58,
    damping: 22,
    mass: 0.3
  });
  const orbitX = useSpring(useTransform(scrollYProgress, [0, 1], [-24, 26]), {
    stiffness: 42,
    damping: 20,
    mass: 0.5
  });
  const orbitRotate = useSpring(useTransform(scrollYProgress, [0, 1], [0, 20]), {
    stiffness: 38,
    damping: 18,
    mass: 0.55
  });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div style={{ y: deepLayerY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-mesh opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(56,189,248,0.2),transparent_36%),radial-gradient(circle_at_88%_6%,rgba(99,102,241,0.18),transparent_34%)]" />
      </motion.div>

      <motion.div
        style={{ y: midLayerY, x: orbitX, rotate: orbitRotate }}
        className="absolute -left-36 top-16 h-[30rem] w-[30rem] rounded-full border border-sky-300/10 bg-cyan-400/5 blur-[2px]"
      />
      <motion.div
        style={{ y: midLayerY }}
        className="absolute right-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full border border-indigo-300/10 bg-indigo-500/10 blur-[3px]"
      />

      <motion.div style={{ y: nearLayerY }} className="absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-cyan-400/18 blur-[96px]" />
        <div className="absolute right-[10%] top-[30%] h-56 w-56 rounded-full bg-indigo-500/16 blur-[110px]" />
        <div className="absolute left-[30%] bottom-[4%] h-60 w-60 rounded-full bg-violet-500/14 blur-[120px]" />
      </motion.div>

      <motion.div style={{ y: deepLayerY }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]" />
      </motion.div>

      <motion.div
        animate={{ x: [0, 24, -18, 0], y: [0, -20, 14, 0], rotate: [0, 6, -4, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[18%] top-[58%] h-24 w-24 rounded-[30%] border border-sky-300/25 bg-sky-400/10 blur-[1px]"
      />
      <motion.div
        animate={{ x: [0, -18, 22, 0], y: [0, 18, -16, 0], rotate: [0, -8, 5, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[64%] h-20 w-20 rounded-[24%] border border-indigo-300/25 bg-indigo-500/10 blur-[1px]"
      />
    </div>
  );
}

export default BackgroundEffects;
