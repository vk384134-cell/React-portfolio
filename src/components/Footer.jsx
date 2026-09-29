import { Container, Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
        <div>
          <h2 className="h5 mb-1">{profile.name}</h2>
          <p className="mb-1">{profile.tagline}</p>
          <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
        </div>
        <div className="d-flex align-items-center gap-3">
          <SocialLinks />
          <Button href="#home" variant="light" aria-label="Back to top" className="rounded-circle p-0 d-flex align-items-center justify-content-center" style={{ width: 44, height: 44 }}>
            <FaArrowUp aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </footer>
  );
}
