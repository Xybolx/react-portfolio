import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                <img src="https://jsonworld.com/content/uploads/blog-images/react.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                Mat Hayward
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
                    <Link style={{ margin: 20 }} to="https://github.com/Xybolx">
                        Gmail&nbsp;<i className="far fa-envelope"></i>
                    </Link>
                        <Link style={{ margin: 20 }} to="https://github.com/Xybolx">
                            Linked&nbsp;<i className="fab fa-linkedin"></i>
                        </Link>
                            <Link style={{ margin: 20 }} to="https://github.com/Xybolx">
                                GitHub&nbsp;<i className="fab fa-github-square"></i>
                            </Link>
                    </span>
                </div>
            </div>
        );
    };
};

export default Contact;