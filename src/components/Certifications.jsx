import { Container, Row, Col, Card } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
import { certifications } from "../data/certifications";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-labelledby="certifications-title">
      <Container>
        <SectionHeading title="Certifications" />
        <Row xs={1} md={2} lg={3} className="g-4">
          {certifications.map((c) => (
            <Col key={c.id}>
              <Card className="card-soft h-100"><Card.Body>
                <FaAward className="fs-3 text-primary mb-2" aria-hidden="true" />
                <Card.Title as="h3" className="h5">{c.name}</Card.Title>
                <div>{c.issuer}</div>
                <div className="text-secondary small">{c.date}{c.credentialId && ` · ID: ${c.credentialId}`}</div>
                {c.url && <a href={c.url} target="_blank" rel="noreferrer" className="d-inline-block mt-2">View credential<span className="visually-hidden"> for {c.name}</span></a>}
              </Card.Body></Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
