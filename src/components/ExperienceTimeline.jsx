import { experience } from "../data.js";

export default function ExperienceTimeline() {
  return (
    <ol className="timeline">
      {experience.map((e, i) => (
        <li key={e.org}>
          <span className="timeline-dot" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
          <div className="timeline-card">
            <h3>{e.role}</h3>
            <p className="timeline-org">{e.org}</p>
            <span className="timeline-meta">{e.meta}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
