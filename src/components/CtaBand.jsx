import { Link } from "react-router-dom";
import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function CtaBand() {
  return (
    <Reveal as="section" className="section cta-band">
      <div>
        <p className="section-kicker">OPEN TO OPPORTUNITIES</p>
        <h2>Looking for an entry-level <span>Frontend developer?</span></h2>
        <p>I'd love to contribute to your team while continuing to grow.</p>
      </div>
      <div className="cta-actions">
        <Link className="button button-primary" to="/contact">Get in touch →</Link>
        <a className="button button-secondary" href={profile.resumePath} download>↓ Resume</a>
      </div>
    </Reveal>
  );
}
