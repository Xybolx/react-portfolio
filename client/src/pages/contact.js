import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "../components/clock";

const Contact = () => {
        return (
            <div>
                <div>
                    <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
                        <img style={{ visibility: "hidden" }} src="https://jsonworld.com/content/uploads/blog-images/react.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                        <NavLink className="navbar-brand" to="/">
                            &nbsp;Mat Hayward
                            <Clock />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/">About</NavLink>
                                <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                                <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                            </div>
                        </div>
                    </nav>
                    <br />
                    <div className="jumbotron jumbotron-fluid">
                        <h1>Contact Me</h1>
                        <span>
                            <a style={{ margin: 20 }} href="mailto:xybolx@gmail.com">
                                Gmail&nbsp;<i className="far fa-envelope"></i>
                            </a>
                            <a style={{ margin: 20 }} href="https://www.linkedin.com/in/mat-hayward-6a622175/" rel="noopener noreferrer" target="_blank">
                                Linked&nbsp;<i className="fab fa-linkedin"></i>
                            </a>
                            <a style={{ margin: 20 }} href="https://github.com/Xybolx" rel="noopener noreferrer" target="_blank">
                                GitHub&nbsp;<i className="fab fa-github-square"></i>
                            </a>
                        </span>
                    </div>
                    <img style={{ height: "auto", width: 500 }} className="img-fluid" src="plane.gif" alt="" />
                </div>
            </div>
        );
    };

export default Contact;