import React from "react";
import { NavLink, Link } from "react-router-dom";
import Clock from "../components/clock";

const About = () => {
        return (
            <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
                <NavLink className="navbar-brand" to="/">
                <img style={{ visibility: "hidden" }} src="https://jsonworld.com/content/uploads/blog-images/react.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                &nbsp;Mat Hayward
                <Clock />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
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
                <div className="col-md-6 offset-md-3">
                    <h1>Mat Hayward</h1>
                    <p>&nbsp;I'm a Full Stack developer with experience building Rest API's with NodeJs and Express servers, UI's with React, and databases with MySQL and MongoDB ORM's Sequelize and Mongoose. Right now I'm learning the React Context and Hook API's and experimenting with the Javascript Speech Recognition API. If you want to navigate the page by voice say "about", "contact", or "portfolio". I can be reached through the <Link to="/contact">contact</Link> page and you can view some of my work <Link to="/portfolio">here</Link>.</p>
                </div>
            </div>
        );
    };

export default About;