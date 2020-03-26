import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <br />
            <div className="col-md-6 offset-md-3">
                <h1>Mat Hayward</h1>
                <p>&nbsp;I'm a Full Stack developer with experience building Rest API's with NodeJs and Express servers, UI's with React, and databases with MySQL and MongoDB ORM's Sequelize and Mongoose. Right now I'm learning the React Context and Hook API's and experimenting with the Javascript Speech Recognition API. If you want to navigate the page by voice say "about", "contact", or "portfolio". I can be reached through the <Link to="/contact">contact</Link> page and you can view some of my work <Link to="/portfolio">here</Link>.</p>
            </div>
        </div>
    );
};

export default About;