import { Container, Row, Col, Button } from "react-bootstrap";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7} className="order-2 order-lg-1 text-center text-lg-start">
            <p className="mb-2 fs-5">Hi, I'm</p>
            <h1 id="hero-title" className="mb-2">{profile.name}</h1>
            <p className="hero-role mb-3">{profile.title}</p>
            <p className="fs-5 text-secondary mb-4 mx-auto mx-lg-0" style={{ maxWidth: "34rem" }}>{profile.tagline}</p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4">
              <Button href="#projects" variant="primary" size="lg">View projects</Button>
              <Button href={profile.resumeUrl} download variant="outline-primary" size="lg">Download resume</Button>
            </div>
            <SocialLinks className="justify-content-center justify-content-lg-start" />
          </Col>
          <Col lg={5} className="order-1 order-lg-2 text-center">
            <img src={profile.image} alt={`Portrait of ${profile.name}`} className="hero-img" width="380" height="380" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
