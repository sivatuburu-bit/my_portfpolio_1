import PageHeader from "../components/PageHeader.jsx";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Experience() {
  return (
    <>
      <PageHeader kicker="WORK EXPERIENCE" title="Where I've" accent="trained" crumbs={[{ label: "Experience" }]} />
      <Reveal as="section" className="section">
        <ExperienceTimeline />
      </Reveal>
      <CtaBand />
    </>
  );
}
