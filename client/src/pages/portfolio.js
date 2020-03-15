import React, { Suspense, lazy} from "react";
import { NavLink } from "react-router-dom";
import Clock from "../components/clock";
import Spinner from "../components/spinner";

// lazy imports
const Projects = lazy(() => import("../components/projects"));

const Portfolio = () => {
    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg">
                <img style={{ visibility: "hidden" }} src="https://jsonworld.com/content/uploads/blog-images/react.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                <NavLink className="navbar-brand text-white" to="/">
                    &nbsp;Mat Hayward
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
            <Suspense fallback={<Spinner />}>
                <Projects />
            </Suspense>
        </div>
    );
};

export default Portfolio;