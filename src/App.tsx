import React from "react";

export default function App(): React.JSX.Element {
  return (
    <div className="page-frame">
      <header className="top-bar">
        <img src="/assets/prong logo.svg" alt="Prong logo" className="logo" />
        <span className="brand">prong</span>
      </header>

      <main className="hero">
        <h1 className="headline">Building the future of Voice AI.</h1>
        <p className="subcopy">
          <a href="https://cal.com/belridge-labs" className="talk-link">Message us</a>{" "}
          to explore how Voice AI can transform your business.
        </p>
      </main>

      <footer className="footer">© 2025 Belridge Labs</footer>
    </div>
  );
}


