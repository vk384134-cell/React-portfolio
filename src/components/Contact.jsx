import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card, Spinner } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const empty = { name: "", email: "", subject: "", message: "" };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!emailRe.test(v.email)) e.email = "Enter a valid email address, like name@example.com.";
  if (!v.subject.trim()) e.subject = "Enter a subject.";
  if (!v.message.trim()) e.message = "Enter a message.";
  return e;
}

// Replace this with a real call (EmailJS, Formspree, your own API...).
async function sendMessage(values) {
  await new Promise((r) => setTimeout(r, 900));
  return values;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("loading");
    try {
      await sendMessage(values);
      setStatus("success");
      setValues(empty);
    } catch {
      setStatus("error");
    }
  };

  const field = (name, label, props = {}) => (
    <Form.Group className="mb-3" controlId={`contact-${name}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control name={name} value={values[name]} onChange={onChange} isInvalid={!!errors[name]}
        aria-required="true" {...props} />
      <Form.Control.Feedback type="invalid">{errors[name]}</Form.Control.Feedback>
    </Form.Group>
  );

  return (
    <section id="contact" className="section section-alt" aria-labelledby="contact-title">
      <Container>
        <SectionHeading title="Contact" subtitle="Have a role or project in mind? Send a message and I'll reply soon." />
        <Row className="g-4">
          <Col lg={5}>
            <ul className="list-unstyled d-grid gap-3 mb-4">
              <li><FaEnvelope className="me-2 text-primary" aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><FaPhone className="me-2 text-primary" aria-hidden="true" /><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
              <li><FaMapMarkerAlt className="me-2 text-primary" aria-hidden="true" />{profile.location}</li>
            </ul>
            <SocialLinks />
          </Col>
          <Col lg={7}>
            <Card className="card-soft"><Card.Body className="p-4">
              {status === "success" && <Alert variant="success" dismissible onClose={() => setStatus("idle")}><strong>Message sent.</strong> Thanks for reaching out.</Alert>}
              {status === "error" && <Alert variant="danger"><strong>Message not sent.</strong> Check your connection and try again, or email me directly.</Alert>}
              <Form noValidate onSubmit={onSubmit}>
                <Row>
                  <Col md={6}>{field("name", "Name", { type: "text", autoComplete: "name" })}</Col>
                  <Col md={6}>{field("email", "Email", { type: "email", autoComplete: "email" })}</Col>
                </Row>
                {field("subject", "Subject", { type: "text" })}
                {field("message", "Message", { as: "textarea", rows: 5 })}
                <Button type="submit" variant="primary" disabled={status === "loading"} className="w-100 w-sm-auto">
                  {status === "loading" ? <><Spinner size="sm" className="me-2" aria-hidden="true" />Sending…</> : "Send message"}
                </Button>
              </Form>
            </Card.Body></Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
