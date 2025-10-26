import React from "react";
import { Link } from "react-router-dom";
import prongLogo from "../assets/prong-logo.svg";

export default function App(): React.JSX.Element {
  return (
    <div className="page-frame">
      <header className="top-bar">
        <img src={prongLogo} alt="Prong logo" className="logo" />
        <span className="brand">prong</span>
      </header>

      <main className="hero">
        <h1 className="headline">Build self-improving Voice Agents</h1>
        <h2 className="subheadline">
        Prong analyzes live calls and refines your system prompts + tool use in real time.
        </h2>
        <p className="subcopy">
          <Link to="/product" className="talk-link">Product</Link>
          <span className="link-spacer"></span>
          <a href="https://cal.com/belridge-labs" className="talk-link">Book a call</a>
        </p>
      </main>

      <footer className="footer">
        <span className="copyright">© 2025 Belridge Labs</span>
        <a href="mailto:founders@belridge-labs.com" className="contact-link">Contact</a>
      </footer>
    </div>
  );
}


