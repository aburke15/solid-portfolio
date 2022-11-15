import { Component } from 'solid-js';

import favi from '../assets/images/favicon.png';

const Navbar: Component = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#title">
          <img src={favi} alt="navbar icon" width={35} height={35} />
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#title">
                <i class="bi bi-house"></i> Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                <i class="bi bi-file-person"></i> About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                <i class="bi bi-tools"></i> Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">
                <i class="bi bi-file-earmark-pdf"></i> Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                <i class="bi bi-kanban"></i> Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <i class="bi bi-telephone-inbound"></i> Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
