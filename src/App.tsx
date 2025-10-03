import React from "react";

export default function App(): React.JSX.Element {
  return (
    <div className="page-frame">
      <header className="top-bar">
        <img src="/assets/prong logo.svg" alt="Prong logo" className="logo" />
        <span className="brand">prong</span>
      </header>

      <main className="hero">
        <h1 className="headline">Building the future of AI in education.</h1>
        <p className="subcopy">
          <a href="https://cal.com/belridge-labs" className="talk-link">Let’s talk</a>{" "}
          about how AI can transform your classroom experience today.
        </p>
      </main>

      <footer className="footer">© 2025 Belridge Labs</footer>
    </div>
  );
}


