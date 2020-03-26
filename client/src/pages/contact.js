import React from "react";

const Contact = () => {
        return (
            <div>
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
        );
    };

export default Contact;