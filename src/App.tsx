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

      {/* <main className="hero">
        <h1 className="headline">Build self-improving Voice Agents</h1>
        <h2 className="subheadline">
        Prong analyzes live calls and refines your system prompts + tool use in real time.
        </h2>
        <div className="vertical-spacer"></div>
        <p className="subcopy">
          <Link to="/product" className="talk-link">Product</Link>
          <span className="link-spacer"></span>
          <a href="https://cal.com/belridge-labs" className="talk-link">Book a call</a>
        </p>
      </main> */}

      <main className="product-hero">        
        <div className="product-content">
          <section className="feature-section">
            <h2 className="feature-title">Build voice agents that improve themselves</h2>
            <p className="feature-description">
              Prong monitors all production calls, evaluates them, and refines your system prompts + tool use in real time.
            </p>
          </section>

          <section className="feature-section">
            <h2 className="coming-soon-feature-title">Blueprint and generate your voice agent in seconds</h2>
            <p className="coming-soon-feature-description">
              (Coming Soon) Upload a customer’s call recordings, knowledge base, and tools. 
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
        {/* <div className="backed-by">
          <span className="backed-by-text">Backed by</span>
          <img src={teloraLogo} alt="Telora logo" className="telora-logo" />
        </div> */}
      </footer>
    </div>
  );
}


