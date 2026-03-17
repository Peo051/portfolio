import { motion } from "framer-motion";

function getInitialOffset(axis, distance) {
  if (axis === "x") return { x: distance, y: 0 };
  if (axis === "x-reverse") return { x: -distance, y: 0 };
  if (axis === "y-reverse") return { x: 0, y: -distance };
  return { x: 0, y: distance };
}

function AxisReveal({
  as = "div",
  axis = "y",
  distance = 24,
  delay = 0,
  duration = 0.6,
  amount = 0.35,
  once = true,
  className = "",
  children,
  ...props
}) {
  const MotionTag = motion(as);
  const initialOffset = getInitialOffset(axis, distance);

  return (
    <MotionTag
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.2, 0.85, 0.25, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default AxisReveal;
