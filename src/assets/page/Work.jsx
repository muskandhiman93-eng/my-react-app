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
              <a  className="project-card" href="/weather.html"
              target="_blank" rel="noopener noreferrer">
                  
                <div className="project-top">
                  <span className="fname">weather-app</span>
                  <span className="arrow">↗</span>
                </div>
                <p>
                 A modern Weather App built with HTML, CSS, and JavaScript using WeatherAPI.
                  It provides real-time weather information, including temperature,
                   humidity, wind speed, and weather conditions, with a responsive UI and dark/light theme support.
                </p>
                <div className="project-tags">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JS</span>
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