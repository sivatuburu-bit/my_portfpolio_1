import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section not-found">
      <p className="section-kicker">ERROR 404</p>
      <h1 className="page-title">Page <span>not found</span></h1>
      <p className="page-lead">The page you're looking for doesn't exist or has moved.</p>
      <div className="hero-actions">
        <Link className="button button-primary" to="/">Back to home</Link>
        <Link className="button button-secondary" to="/projects">View projects</Link>
      </div>
    </section>
  );
}
