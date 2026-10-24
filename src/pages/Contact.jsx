import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import { profile } from "../data.js";

function CopyButton({ value, label }) {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      window.prompt(`Copy ${label}:`, value);
    }
  };
  return (
    <button type="button" className="copy-btn" onClick={copy} aria-label={`Copy ${label}`}>
      {done ? "Copied ✓" : "Copy"}
    </button>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const update = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // No backend: this opens the visitor's own email app with the message pre-filled.
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setError("Please enter your name and a message.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()}${form.email ? `\n${form.email.trim()}` : ""}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "✉", copy: true },
    { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: "☎", copy: true },
    { label: "Location", value: profile.location, icon: "⌖" },
    { label: "GitHub", value: "sivatuburu-bit", href: profile.github, icon: "⌥", external: true }
  ];

  return (
    <>
      <PageHeader
        kicker="GET IN TOUCH"
        title="Let's talk about"
        accent="opportunities."
        text="Seeking an entry-level Frontend / Web Developer role where I can contribute and continue growing."
        crumbs={[{ label: "Contact" }]}
      />
      <Reveal as="section" className="section contact-layout">
        <div className="contact-list">
          {items.map(i => {
            const inner = (
              <>
                <span className="contact-icon" aria-hidden="true">{i.icon}</span>
                <span className="contact-text"><small>{i.label}</small><strong>{i.value}</strong></span>
              </>
            );
            return (
              <div className="contact-item" key={i.label}>
                {i.href ? (
                  <a href={i.href} {...(i.external ? { target: "_blank", rel: "noreferrer" } : {})}>{inner}</a>
                ) : (
                  <div className="contact-static">{inner}</div>
                )}
                {i.copy && <CopyButton value={i.value} label={i.label} />}
              </div>
            );
          })}
          <a className="button button-secondary" href={profile.resumePath} download>↓ Download Resume</a>
        </div>

        <form className="contact-form" onSubmit={submit} noValidate>
          <h3>Send a message</h3>
          <p className="form-note">
            This site has no backend, so sending opens your email app with the message pre-filled. You then press send there.
          </p>
          <label>Name
            <input name="name" value={form.name} onChange={update} autoComplete="name" required />
          </label>
          <label>Your email (optional)
            <input name="email" type="email" value={form.email} onChange={update} autoComplete="email" />
          </label>
          <label>Message
            <textarea name="message" rows="5" value={form.message} onChange={update} required />
          </label>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button button-primary" type="submit">Open in email app →</button>
        </form>
      </Reveal>
    </>
  );
}
