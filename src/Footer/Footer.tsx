import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Cloud Infrastructure Dashboard</h3>

        <p>Built with React, TypeScript, TanStack Query and Framer Motion.</p>

        <div className="footer-tech">
          <span>React</span>
          <span>TypeScript</span>
          <span>TanStack Query</span>
          <span>Framer Motion</span>
        </div>

        <small>© {new Date().getFullYear()} Saiteja Vasamsetti</small>
      </div>
    </footer>
  );
}

export default Footer;
