import { Link } from "react-router-dom";
import ProjectArt from "./ProjectArt.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title}`} tabIndex={-1}>
        <ProjectArt project={project} />
      </Link>
      <div className="project-body">
        <p className="project-category">{project.category}</p>
        <h3><Link to={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
        <div className="project-links">
          <Link to={`/projects/${project.slug}`}>View details →</Link>
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo ↗</a>}
          {project.code && <a href={project.code} target="_blank" rel="noreferrer">GitHub ↗</a>}
        </div>
      </div>
    </article>
  );
}
