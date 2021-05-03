import React from 'react';

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><span className="fw-light fs-3">SM Ismail</span></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item mx-3 fw-bold">
                            <a class="nav-link" href="/home">Home</a>
                        </li>
                        <li class="nav-item mx-3 fw-bold">
                            <a class="nav-link" href="/about-me">About me</a>
                        </li>
                        <li class="nav-item mx-3 fw-bold">
                            <a class="nav-link" href="/projects">My projects</a>
                        </li>
                        <li class="nav-item mx-3 fw-bold">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item mx-3 fw-bold">
                            <a class="nav-link" href="/contact-me">Contact me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;