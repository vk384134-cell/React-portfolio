export default function SectionHeading({ title, subtitle }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </>
  );
}
