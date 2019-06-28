import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Clock from "../components/clock";

class About extends Component {
    render() {
        return (
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
                        <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/">About <span className="sr-only">(current)</span></NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/contact">Contact</NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                    </div>
                </div>
            </nav>
            <br />
                <div className="jumbotron jumbotron-fluid">
                    <h1>Mat Hayward</h1>
                    <p>&nbsp;&nbsp;&nbsp;I'm a Full Stack developer with experience building Rest API's, UI's, and SQL and NoSQL databases. As a recent graduate of the University Of Arizona Full Stack Boot Camp, I am looking for an opportunity to prove myself in this industry and I'm ready and willing to listen and learn. I can be reached via the <Link to="/contact">contact</Link> page of this site and you can view some of my work <Link to="/portfolio">here</Link>.</p>
                </div>
            </div>
        );
    };
};

export default About;