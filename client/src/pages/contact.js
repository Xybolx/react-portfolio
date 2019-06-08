import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Clock from "../components/clock";

class Contact extends Component {
    render() {
        return (
            <div>
            <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                <img src="https://jsonworld.com/content/uploads/blog-images/react.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                Mat Hayward
                <Clock />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/">About</NavLink>
                    </div>
                </div>
            </nav>
                <div className="jumbotron jumbotron-fluid">
                    <h1>Contact</h1>
                <span>
                    <a style={{ margin: 20 }} href="mailto:xybolx@gmail.com">
                        Gmail&nbsp;<i className="far fa-envelope"></i>
                    </a>
                        <a style={{ margin: 20 }} href="https://www.linkedin.com/in/mat-hayward-6a622175/" target="_blank">
                            Linked&nbsp;<i className="fab fa-linkedin"></i>
                        </a>
                            <a style={{ margin: 20 }} href="https://github.com/Xybolx" target="_blanks">
                                GitHub&nbsp;<i className="fab fa-github-square"></i>
                            </a>
                    </span>
                </div>
            </div>
            </div>
        );
    };
};

export default Contact;