import React from "react";
import { Link } from "react-router-dom";
import prongLogo from "../assets/prong-logo.svg";
import teloraLogo from "../assets/telora.jpeg";

export default function App(): React.JSX.Element {
  return (
    <div className="page-frame">
      <header className="top-bar">
        <img src={prongLogo} alt="Prong logo" className="logo" />
        <span className="brand">prong</span>
      </header>

      <main className="product-hero">        
        <div className="product-content">
          <section className="feature-section">
            <div className="feature-title-row">
              <h2 className="feature-title">
                Build voice agents that improve themselves
                <span className="title-sep" aria-hidden="true">|</span>
              </h2>
              <span className="live-now-pill pill-inline">Live</span>
            </div>
            <p className="feature-description">
              Prong monitors all production calls, evaluates them, and refines your system prompts + tool use in real time.
            </p>
          </section>

          <section className="feature-section">
            <div className="feature-title-row">
              <h2 className="feature-title">
                Blueprint and generate your voice agent in seconds
                <span className="title-sep" aria-hidden="true">|</span>
              </h2>
              <span className="coming-soon-pill pill-inline">Coming Soon</span>
            </div>
            <p className="feature-description">
              Upload a customer’s call recordings, knowledge base, and tools. 
              Prong listens to every conversation, maps out every scenario, and generates a production-ready agent.
            </p>
          </section>


        </div>

        <div className="vertical-spacer"></div>

        <p className="subcopy">
          {/* <Link to="/" className="talk-link">← Back to Home</Link> */}
          <a href="mailto:founders@belridge-labs.com" className="talk-link">Email us</a>
          <span className="link-spacer"></span>
          <a href="https://cal.com/belridge-labs" className="talk-link">Book a call</a>
        </p>
      </main>

      <footer className="footer">
        <span className="copyright">© 2025 Belridge Labs</span>
      </footer>
    </div>
  );
}


