import React from 'react';
function Sidebar() {
    return (

        <>
            <div className="flex-shrink-0 p-3" style={{ width: "280px", height: "100vh" }}>
                <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">

                    <span className="fs-5 fw-semibold">Info</span> </a>
                <ul className="list-unstyled ps-0">
                <li className="mb-1">
                    <button className="resume-btn" onClick={() => window.open("/resume.png", "_blank")}>
  📄 Resume
</button>

                   
                </li>
                </ul>
                </div>




        </>
    );
}

export default Sidebar;