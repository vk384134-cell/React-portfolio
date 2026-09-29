import { Container } from "react-bootstrap";
import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <Container>
        <SectionHeading title="Experience" />
        <div className="timeline">
          {experience.map((e) => (
            <TimelineItem key={e.id} heading={e.role} subheading={e.company}
              meta={`${e.location} · ${e.duration}`} points={e.responsibilities}
              extra={e.achievements} tags={e.technologies} tagsLabel="Technologies used" />
          ))}
        </div>
      </Container>
    </section>
  );
}
