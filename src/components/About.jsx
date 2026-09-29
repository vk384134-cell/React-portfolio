import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section section-alt" aria-labelledby="about-title">
      <Container>
        <SectionHeading title="About me" />
        <Row className="g-4">
          <Col lg={7}>
            <p>{profile.summary}</p>
            <h3 className="h5 mt-4">Interests</h3>
            <p>{profile.interests}</p>
            <h3 className="h5">Career goals</h3>
            <p>{profile.goals}</p>
            <h3 className="h5">Key strengths</h3>
            <div className="d-flex flex-wrap gap-2">
              {profile.strengths.map((s) => <Badge key={s} className="tech-badge">{s}</Badge>)}
            </div>
          </Col>
          <Col lg={5}>
            <Row xs={2} className="g-3">
              {profile.stats.map((s) => (
                <Col key={s.label}>
                  <Card className="card-soft h-100"><Card.Body>
                    <div className="stat-num">{s.value}</div>
                    <div className="text-secondary small mt-1">{s.label}</div>
                  </Card.Body></Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
