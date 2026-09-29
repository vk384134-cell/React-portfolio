import { Container, Row, Col } from "react-bootstrap";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt" aria-labelledby="projects-title">
      <Container>
        <SectionHeading title="Projects" subtitle="Selected work with the stack and features behind each one." />
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((p) => <Col key={p.id}><ProjectCard project={p} /></Col>)}
        </Row>
      </Container>
    </section>
  );
}
