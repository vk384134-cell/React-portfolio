import { useEffect, useState } from "react";
import { Navbar as RBNavbar, Nav, Container, Button } from "react-bootstrap";
import { profile } from "../data/profile";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Certifications", "Contact"];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <RBNavbar expand="lg" sticky="top" expanded={expanded} onToggle={setExpanded} className="site-nav" aria-label="Main navigation">
      <Container>
        <RBNavbar.Brand href="#home" onClick={() => setExpanded(false)}>{profile.name}</RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-nav" />
        <RBNavbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-1">
            {links.map((l) => {
              const id = l.toLowerCase();
              return (
                <Nav.Link key={id} href={`#${id}`} active={active === id}
                  aria-current={active === id ? "true" : undefined} onClick={() => setExpanded(false)}>
                  {l}
                </Nav.Link>
              );
            })}
            <Button href={profile.resumeUrl} download size="sm" variant="primary" className="ms-lg-2 mt-2 mt-lg-0">Resume</Button>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}
