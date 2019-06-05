import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Portfolio extends Component {
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
                        <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/portfolio">Portfolio<span className="sr-only">(current)</span></NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/contact">Contact</NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/">About</NavLink>
                    </div>
                </div>
            </nav>
                <div className="jumbotron jumbotron-fluid">
                    <h1>Portfolio</h1>
                </div>
            </div>
        );
    };
};

export default Portfolio;