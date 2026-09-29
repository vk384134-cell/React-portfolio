import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { skills } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <Container>
        <SectionHeading title="Skills" subtitle="Technologies I use to design, build and ship web applications." />
        <Row xs={1} md={2} lg={3} className="g-4">
          {skills.map(({ category, items }) => (
            <Col key={category}>
              <Card className="card-soft h-100"><Card.Body>
                <Card.Title as="h3" className="h5 mb-3">{category}</Card.Title>
                <div className="d-flex flex-wrap gap-2">
                  {items.map((i) => <Badge key={i} className="tech-badge">{i}</Badge>)}
                </div>
              </Card.Body></Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
