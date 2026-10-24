import { Link } from "react-router-dom";

export default function PageHeader({ kicker, title, accent, text, crumbs }) {
  return (
    <section className="page-header section">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {crumbs?.map(c => (
          <span key={c.label}>
            <i>/</i>
            {c.to ? <Link to={c.to}>{c.label}</Link> : <b>{c.label}</b>}
          </span>
        ))}
      </nav>
      <p className="section-kicker">{kicker}</p>
      <h1 className="page-title">{title} {accent && <span>{accent}</span>}</h1>
      {text && <p className="page-lead">{text}</p>}
    </section>
  );
}
