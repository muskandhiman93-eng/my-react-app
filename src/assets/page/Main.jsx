import React from 'react'

export default function Main() {
    return (
        <>
            <header className="hero">

    <div className="wrap hero-grid">

        <div>
            <div className="eyebrow">
                <span className="dot"></span>available for new projects
            </div>

            <h1>
                Building backends that don't{" "}
                <span className="accent">wake you up at 3am.</span>
            </h1>

            <p className="lead">
                I'm Muskan, a software developer focused on reliable APIs,
                clean data models, and shipping things that hold up in
                production — not just in the demo.
            </p>

            <div className="hero-ctas">
                <a href="#work" className="btn btn-primary">
                    View projects →
                </a>

                <a href="#contact" className="btn btn-ghost">
                    Get in touch
                </a>
            </div>
        </div>

        
        <div className="code-card">
            <div className="code-header">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>

                <span className="file-name">about-me.json</span>
            </div>

<pre>{`{
"name":"Muskan Dhiman",
"role":"Web Developer",
"focus":["React","Bootstrap"],
"stack":["HTML","CSS","React"],
"status":"Open to Work"
}`}</pre>

        </div>

    </div>

</header>
               

        </>
    );
}