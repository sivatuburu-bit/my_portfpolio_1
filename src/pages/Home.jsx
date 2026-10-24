import { Link } from "react-router-dom";
import { profile, projects, skillGroups, experience } from "../data.js";
import ProjectCard from "../components/ProjectCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Reveal from "../components/Reveal.jsx";

const facts = [
  ["React JS", "Primary frontend library"],
  ["API-driven", "REST, Fetch & YouTube API"],
  ["Git & GitHub", "Version control"],
  ["Quick learner", "Continuous improvement"]
];

export default function Home() {
  const skillCount = skillGroups.flatMap(g => g.items).length;
  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO ENTRY-LEVEL ROLES</div>
          <h1>Hi, I'm <span>{profile.name}</span></h1>
          <h2 className="hero-subtitle">{profile.role} <span>| React JS</span></h2>
          <p className="hero-text">{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projects">View Projects →</Link>
            <Link className="button button-secondary" to="/contact">Contact Me</Link>
            <a className="button button-ghost" href={profile.resumePath} download>↓ Download Resume</a>
          </div>
          <div className="contact-strip">
            <a href={profile.phoneHref}>☎ {profile.phone}</a>
            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="profile-card">
            <div className="profile-top"><span>DEVELOPER PROFILE</span><span>● ● ●</span></div>
            <div className="avatar">TS<span>.</span></div>
            <h2>{profile.name}</h2>
            <p>{profile.role} · {profile.level}</p>
            <div className="mini-divider" />
            <div className="code-line"><span className="purple">const</span> role = <span className="green">"Frontend Developer"</span>;</div>
            <div className="code-line"><span className="purple">const</span> stack = <span className="green">["HTML", "CSS", "JS", "React"]</span>;</div>
            <div className="profile-tags"><span>React JS</span><span>REST APIs</span><span>GitHub</span></div>
          </div>
          <div className="float-chip chip-react">⚛ React JS</div>
          <div className="float-chip chip-api">↗ REST APIs</div>
        </div>
      </section>

      <Reveal as="section" className="quick-facts section">
        {facts.map(([t, s]) => <div key={t}><strong>{t}</strong><span>{s}</span></div>)}
      </Reveal>

      <Reveal as="section" className="section block">
        <div className="section-title-row">
          <div><p className="section-kicker">EXPLORE</p><h2>Where to <span>next?</span></h2></div>
        </div>
        <div className="link-grid">
          <Link to="/about" className="link-card"><span>01</span><h3>About</h3><p>Professional summary and strengths.</p><b>Read more →</b></Link>
          <Link to="/skills" className="link-card"><span>02</span><h3>Skills</h3><p>{skillCount} skills across {skillGroups.length} areas.</p><b>See toolkit →</b></Link>
          <Link to="/projects" className="link-card"><span>03</span><h3>Projects</h3><p>{projects.length} projects, with details and demos.</p><b>Browse projects →</b></Link>
          <Link to="/experience" className="link-card"><span>04</span><h3>Experience</h3><p>{experience.length} trainee roles.</p><b>View timeline →</b></Link>
        </div>
      </Reveal>

      <Reveal as="section" className="section block">
        <div className="section-title-row">
          <div><p className="section-kicker">FEATURED WORK</p><h2>Selected <span>projects</span></h2></div>
          <Link className="text-link" to="/projects">All projects →</Link>
        </div>
        <div className="project-grid">
          {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </Reveal>

      <CtaBand />
    </>
  );
}
