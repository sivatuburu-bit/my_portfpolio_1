import { Link, Navigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import ProjectArt from "../components/ProjectArt.jsx";
import CtaBand from "../components/CtaBand.jsx";
import useDocumentTitle from "../hooks/useDocumentTitle.js";
import { projects } from "../data.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex(p => p.slug === slug);
  const project = projects[index];
  useDocumentTitle(project ? project.name : "Projects");

  if (!project) return <Navigate to="/projects" replace />;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <PageHeader
        kicker={project.category.toUpperCase()}
        title={project.title}
        text={project.description}
        crumbs={[{ label: "Projects", to: "/projects" }, { label: project.name }]}
      />

      <section className="section detail-grid">
        <div>
          <ProjectArt project={project} />
          <div className="detail-actions">
            {project.live
              ? <a className="button button-primary" href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>
              : <span className="button button-disabled">Live demo: to be added</span>}
            {project.code
              ? <a className="button button-secondary" href={project.code} target="_blank" rel="noreferrer">GitHub ↗</a>
              : <span className="button button-disabled">Repository: to be added</span>}
          </div>
        </div>
        <div className="info-card">
          <h3>What I did</h3>
          <ul className="project-details">{project.details.map(d => <li key={d}>{d}</li>)}</ul>
          <h3>Tech stack</h3>
          <ul className="tag-list">{project.tags.map(t => <li className="tag" key={t}>{t}</li>)}</ul>
        </div>
      </section>

      {projects.length > 1 && (
        <nav className="section pager" aria-label="Project navigation">
          <Link to={`/projects/${prev.slug}`}><small>← Previous</small><span>{prev.name}</span></Link>
          <Link to="/projects" className="pager-all">All projects</Link>
          <Link to={`/projects/${next.slug}`} className="pager-next"><small>Next →</small><span>{next.name}</span></Link>
        </nav>
      )}

      <CtaBand />
    </>
  );
}
