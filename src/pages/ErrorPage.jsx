import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const status = isRouteErrorResponse(error) ? error.status : null;
  return (
    <section className="section not-found">
      <p className="section-kicker">{status ? `ERROR ${status}` : "SOMETHING WENT WRONG"}</p>
      <h1 className="page-title">Unexpected <span>error</span></h1>
      <p className="page-lead">This page could not be loaded. Please try again or go back home.</p>
      <div className="hero-actions">
        <button className="button button-secondary" onClick={() => window.location.reload()}>Reload page</button>
        <Link className="button button-primary" to="/">Back to home</Link>
      </div>
    </section>
  );
}
