import { motion } from "framer-motion";

function getAxisOffset(axis, distance) {
  switch (axis) {
    case "x":
      return { x: distance, y: 0 };
    case "x-reverse":
      return { x: -distance, y: 0 };
    case "y-reverse":
      return { x: 0, y: -distance };
    case "y":
    default:
      return { x: 0, y: distance };
  }
}

function AxisReveal({
  as = "div",
  axis = "y",
  distance = 24,
  delay = 0,
  duration = 0.55,
  amount = 0.35,
  once = true,
  className,
  children,
  ...props
}) {
  const MotionTag = motion(as);
  const offset = getAxisOffset(axis, distance);

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default AxisReveal;
