import { Card, Badge } from "react-bootstrap";

// Shared by Experience and Education.
export default function TimelineItem({ heading, subheading, meta, points = [], pointsLabel, tags = [], tagsLabel, extra = [] }) {
  return (
    <div className="timeline-item">
      <Card className="card-soft"><Card.Body>
        <Card.Title as="h3" className="h5 mb-1">{heading}</Card.Title>
        <div className="fw-semibold">{subheading}</div>
        <div className="text-secondary small mb-3">{meta}</div>
        {points.length > 0 && <>{pointsLabel && <div className="fw-semibold small">{pointsLabel}</div>}<ul className="ps-3">{points.map((p) => <li key={p}>{p}</li>)}</ul></>}
        {extra.length > 0 && <ul className="ps-3">{extra.map((p) => <li key={p}>{p}</li>)}</ul>}
        {tags.length > 0 && <div className="d-flex flex-wrap gap-2" aria-label={tagsLabel}>{tags.map((t) => <Badge key={t} className="tech-badge">{t}</Badge>)}</div>}
      </Card.Body></Card>
    </div>
  );
}
