import { Container } from "react-bootstrap";
import { education } from "../data/education";
import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

export default function Education() {
  return (
    <section id="education" className="section section-alt" aria-labelledby="education-title">
      <Container>
        <SectionHeading title="Education" />
        <div className="timeline">
          {education.map((e) => (
            <TimelineItem key={e.id} heading={e.degree} subheading={e.institution}
              meta={`${e.location} · ${e.duration}`} points={e.achievements}
              tags={e.coursework} tagsLabel="Relevant coursework" />
          ))}
        </div>
      </Container>
    </section>
  );
}
