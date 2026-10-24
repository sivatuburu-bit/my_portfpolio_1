import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data.js";

export default function Skills() {
  return (
    <>
      <PageHeader
        kicker="TECHNICAL SKILLS"
        title="My"
        accent="toolkit"
        text="Technologies and concepts I work with, grouped by area."
        crumbs={[{ label: "Skills" }]}
      />
      <section className="section skill-grid">
        {skillGroups.map((g, i) => (
          <Reveal as="article" delay={i * 70} className="skill-card" key={g.title}>
            <div className="skill-card-top"><span>0{i + 1}</span><span className="skill-symbol" aria-hidden="true">{g.icon}</span></div>
            <h3>{g.title}</h3>
            <ul className="tag-list">{g.items.map(item => <li className="tag" key={item}>{item}</li>)}</ul>
          </Reveal>
        ))}
      </section>
      <section className="section inline-links center-links">
        <Link className="text-link" to="/projects">See these skills in my projects →</Link>
      </section>
      <CtaBand />
    </>
  );
}
