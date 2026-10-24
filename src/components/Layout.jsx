import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, ScrollRestoration, useLocation, useMatches, useNavigation } from "react-router-dom";
import { navLinks, profile } from "../data.js";
import useDocumentTitle from "../hooks/useDocumentTitle.js";

function Brand() {
  return (
    <Link className="brand" to="/" aria-label={`${profile.name} – home`}>
      <span className="brand-mark">TS</span>
      <span>{profile.shortName}<span className="accent">.</span></span>
    </Link>
  );
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const matches = useMatches();

  // Routes with a `handle.title` set the tab title; ProjectDetail sets its own.
  const titled = [...matches].reverse().find(m => m.handle && "title" in m.handle);
  useDocumentTitle(titled ? titled.handle.title : undefined);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKey = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">Skip to content</a>
      <div className={navigation.state === "loading" ? "progress active" : "progress"} aria-hidden="true" />

      <header className="header">
        <Brand />
        <button
          className="menu-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="main-nav"
        >
          {open ? "✕" : "☰"}
        </button>
        <nav id="main-nav" className={open ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.end}>{link.label}</NavLink>
          ))}
          <a className="nav-cta" href={profile.resumePath} download>Resume ↓</a>
        </nav>
      </header>

      <main id="content" className="page" key={pathname} tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <Brand />
            <p className="footer-text">{profile.role} ({profile.level}) · React JS</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks.map(link => <Link key={link.to} to={link.to}>{link.label}</Link>)}
          </nav>
          <div className="footer-contact">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Tuburu Sivakumar. Built with React JS.</span>
          <span>{profile.location}</span>
        </div>
      </footer>

      <ScrollRestoration />
    </div>
  );
}
