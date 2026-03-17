import AxisReveal from "./AxisReveal";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <AxisReveal axis="y" distance={20} amount={0.5} className="mb-10 sm:mb-12">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{description}</p> : null}
    </AxisReveal>
  );
}

export default SectionHeading;
