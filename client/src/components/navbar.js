import React from 'react';
import Clock from './clock';
import { NavLink } from 'react-router-dom';

const TopNav = () => {

    const hideCollapse = () => {
        const toggler = document.getElementById("togglerBtn");
        toggler.click();
    };

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
            <img style={{ visibility: "hidden" }} src="https://jsonworld.com/content/uploads/blog-images/react.png" width="40" height="30" className="d-inline-block align-top" alt="" />
            <NavLink className="navbar-brand" to="/">
                &nbsp;Mat Hayward
                <Clock />
            </NavLink>
            <button id="togglerBtn" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <div onClick={hideCollapse} className="navbar-nav">
                    <NavLink activeClassName="active" activeStyle={{ color: "cyan" }} style={{ color: "gray" }} className="nav-item nav-link" exact to="/">About</NavLink>
                    <NavLink activeClassName="active" activeStyle={{ color: "cyan" }} style={{ color: "gray" }} className="nav-item nav-link" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                    <NavLink activeClassName="active" activeStyle={{ color: "cyan" }} style={{ color: "gray" }} className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
