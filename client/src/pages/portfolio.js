import React, { lazy, Suspense } from "react";
import { NavLink } from "react-router-dom";
import Clock from "../components/clock";

// lazy load carousel
const Projects = lazy(() => (
    import("../components/projects")
));

const Portfolio = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                    <img src="https://jsonworld.com/content/uploads/blog-images/react.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                    Mat Hayward
                        <Clock />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/">About</NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/contact">Contact</NavLink>
                        <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/portfolio">Portfolio<span className="sr-only">(current)</span></NavLink>
                    </div>
                </div>
            </nav>
            <br />
            <h1>My Portfolio</h1>
            <Suspense fallback={
                <div>
                    <img style={{ height: 300, width: 300 }} className="img-fluid bg-dark img-loader" src="logo192.png" alt="Loading..." />
                    <h2>Loading...</h2>
                </div>
            }>
                <Projects />
            </Suspense>
        </div>
    );
};

export default Portfolio;