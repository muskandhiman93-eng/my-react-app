import React from 'react';

function Navbar({toggleSidebar}) {
    return (
<>
< div className="nvbar">
<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <button
          className="btn  btn-outline-dark me-3"
          onClick={toggleSidebar}
        >
          ☰
        </button>
     <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        
        <span className="fs-4"><b> ..Muskan Dhiman</b></span>
      </a>

      <ul className="nav nav-pills">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#stack" className="nav-link">Stack</a></li>
        <li><a href="#work" className="nav-link">Work</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
       
      </ul>
    </header>

    </div>
    </>
    );
  }

export default Navbar;