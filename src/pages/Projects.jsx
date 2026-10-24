import PageHeader from "../components/PageHeader.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <>
      <PageHeader
        kicker="PROJECTS"
        title="Things I've"
        accent="built"
        text="Open a project to see what I built and the technologies I used."
        crumbs={[{ label: "Projects" }]}
      />
      <section className="section project-grid">
        {projects.map((p, i) => <Reveal key={p.slug} delay={i * 90}><ProjectCard project={p} /></Reveal>)}
      </section>
      <CtaBand />
    </>
  );
}
