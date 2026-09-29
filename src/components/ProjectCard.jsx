import { Card, Badge, Button } from "react-bootstrap";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, description, image, technologies, features, githubUrl, liveUrl } = project;
  return (
    <Card className="card-soft project-card h-100">
      <Card.Img variant="top" src={image} alt={`Screenshot of ${title}`} loading="lazy" />
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h3" className="h5">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ul className="small text-secondary ps-3">
          {features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {technologies.map((t) => <Badge key={t} className="tech-badge">{t}</Badge>)}
        </div>
        <div className="d-flex gap-2 mt-auto">
          {githubUrl && <Button href={githubUrl} target="_blank" rel="noreferrer" variant="outline-primary" size="sm"><FaGithub aria-hidden="true" /> Code<span className="visually-hidden"> for {title}</span></Button>}
          {liveUrl && <Button href={liveUrl} target="_blank" rel="noreferrer" variant="primary" size="sm"><FaExternalLinkAlt aria-hidden="true" /> Live demo<span className="visually-hidden"> of {title}</span></Button>}
        </div>
      </Card.Body>
    </Card>
  );
}
