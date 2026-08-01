function Work() {
  return (
    <>
<section id="work">
          <div className="wrap">
            <div className="section-head">
              <span className="section-tag">03 · work</span>
              <h2>Recent projects</h2>
            </div>
            <div className="projects-grid">
              <a className="project-card" href="#">
                <div className="project-top">
                  <span className="fname">ledger-api/</span>
                  <span className="arrow">↗</span>
                </div>
                <p>
                  A double-entry accounting API handling multi-currency
                  transactions for a small fintech, built to survive audits
                  and traffic spikes alike.
                </p>
                <div className="project-tags">
                  <span>Go</span>
                  <span>PostgreSQL</span>
                  <span>Docker</span>
                </div>
              </a>
              <a className="project-card" href="#">
                <div className="project-top">
                  <span className="fname">pulse-chat/</span>
                  <span className="arrow">↗</span>
                </div>
                <p>
                  Real-time messaging app with read receipts and typing
                  indicators, built on WebSockets and Redis pub/sub for
                  horizontal scale.
                </p>
                <div className="project-tags">
                  <span>Node.js</span>
                  <span>React</span>
                  <span>Redis</span>
                </div>
              </a>
              <a className="project-card" href="#">
                <div className="project-top">
                  <span className="fname">cli-snap/</span>
                  <span className="arrow">↗</span>
                </div>
                <p>
                  An open-source CLI tool that snapshots and diffs local dev
                  environments, so "works on my machine" stops being a
                  punchline.
                </p>
                <div className="project-tags">
                  <span>Python</span>
                  <span>Open Source</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        </>
  );
}
export default Work;