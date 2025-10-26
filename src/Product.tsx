import React from "react";
import { Link } from "react-router-dom";
import prongLogo from "../assets/prong-logo.svg";

export default function Product(): React.JSX.Element {
  return (
    <div className="page-frame">
      <header className="top-bar">
        <Link to="/" className="logo-link">
          <img src={prongLogo} alt="Prong logo" className="logo" />
          <span className="brand">prong</span>
        </Link>
      </header>

      <main className="product-hero">
        {/* <h1 className="product-headline">Automate and connect the tail ends of your agents</h1> */}
        
        <div className="product-content">
          <section className="feature-section">
            <h2 className="feature-title">Let agents self-improve in real time</h2>
            <p className="feature-description">
              After every call, Prong analyzes your evaluation metrics, 
              updates your system prompts and tool use, tests them, and deploys them 
              to continuously improve your agent.
            </p>
          </section>

          {/* <section className="feature-section">
            <h2 className="feature-title">Easily add onto your existing stack</h2>
            <p className="feature-description">
              Deploy Prong with your existing voice AI infrastructure.
            </p>
          </section> */}

          <section className="feature-section">
            <h2 className="coming-soon-feature-title">Blueprint your agent before you build it</h2>
            <p className="coming-soon-feature-description">
              (Coming Soon) Upload customers' human agent call recordings and knowledge base. 
              Prong maps every conversation path, tool call, 
              sentiment trend and success metric to give you a clear foundation for agent design.
            </p>
          </section>
        </div>

        <div className="vertical-spacer"></div>

        <p className="subcopy">
          <Link to="/" className="talk-link">← Back to Home</Link>
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
