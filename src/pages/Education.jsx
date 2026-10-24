import PageHeader from "../components/PageHeader.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { education } from "../data.js";

export default function Education() {
  return (
    <>
      <PageHeader kicker="EDUCATION" title="Academic" accent="background" crumbs={[{ label: "Education" }]} />
      <Reveal as="section" className="section">
        <div className="education-list">
          {education.map(e => (
            <article key={e.title}>
              <span className="edu-year">{e.year}</span>
              <div><h3>{e.title}</h3><p>{e.place}</p></div>
              <strong>{e.score}</strong>
            </article>
          ))}
        </div>
      </Reveal>
      <CtaBand />
    </>
  );
}
