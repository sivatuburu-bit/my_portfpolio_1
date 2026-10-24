import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";
import { strengths, profile } from "../data.js";

export default function About() {
  return (
    <>
      <PageHeader
        kicker="ABOUT ME"
        title="Motivated to learn."
        accent="Ready to contribute."
        crumbs={[{ label: "About" }]}
      />

      <Reveal as="section" className="section about-grid">
        <div className="prose">
          <p>{profile.summary}</p>
          <div className="inline-links">
            <Link className="text-link" to="/projects">See my projects →</Link>
            <Link className="text-link" to="/experience">View experience →</Link>
          </div>
        </div>
        <aside className="info-card">
          <h3>Quick info</h3>
          <dl>
            <div><dt>Role</dt><dd>{profile.role}</dd></div>
            <div><dt>Level</dt><dd>{profile.level}</dd></div>
            <div><dt>Location</dt><dd>{profile.location}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
          </dl>
        </aside>
      </Reveal>

      <Reveal as="section" className="section block">
        <div className="section-title-row"><div><p className="section-kicker">STRENGTHS</p><h2>How I <span>work</span></h2></div></div>
        <ul className="strengths">{strengths.map(s => <li key={s}>✓ {s}</li>)}</ul>
      </Reveal>

      <CtaBand />
    </>
  );
}
