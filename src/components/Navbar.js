import React from "react";

function Navbar() {
  return (
    <section
      className="m-0 p-0 py-2"
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "1",
        background: "#2C3333",
      }}
    >
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#about">
              Ganesh Reddy
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " href="#work">
                    Work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#team">
                    Team
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " href="#hire_me">
                    Hire me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
