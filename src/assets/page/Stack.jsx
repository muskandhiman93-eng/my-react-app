import React from "react";
function Stack() {
  return (
    <>
<section id="stack">
          <div className="wrap">
            <div className="section-head">
              <span className="section-tag">02 · stack</span>
              <h2>What I build with</h2>
            </div>
            <div className="stack-groups">
              <div className="stack-card">
                <div className="tag">languages</div>
                <div className="pill-row">
                  <span className="pill">TypeScript</span>
                  <span className="pill">Python</span>
                  <span className="pill">Go</span>
                  <span className="pill">SQL</span>
                </div>
              </div>
              <div className="stack-card">
                <div className="tag">frameworks &amp; tools</div>
                <div className="pill-row">
                  <span className="pill">Node.js</span>
                  <span className="pill">React</span>
                  <span className="pill">FastAPI</span>
                  <span className="pill">Docker</span>
                </div>
              </div>
              <div className="stack-card">
                <div className="tag">infrastructure</div>
                <div className="pill-row">
                  <span className="pill">PostgreSQL</span>
                  <span className="pill">Redis</span>
                  <span className="pill">AWS</span>
                  <span className="pill">CI/CD</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
  );
}

export default Stack;
