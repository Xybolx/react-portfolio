import React from "react";
import { NavLink } from "react-router-dom";
import Clock from "../components/clock";

const Portfolio = () => {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                    <NavLink className="navbar-brand" to="/">
                        <img src="https://jsonworld.com/content/uploads/blog-images/react.png" width="40" height="30" className="d-inline-block align-top" alt="" />
                        Mat Hayward
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
                <div className="col-md-6 offset-md-3">
                    <div className="bd-example">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="2019-06-17 15_39_42-M.E.R.N. Messenger.jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                        <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;M.E.R.N. Messenger&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://mernmessenger.herokuapp.com" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/Xybolx/chat" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="catfish.jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                    <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Catfish&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://rocky-fjord-61195.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/MochaCosine1206/ChatApp" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="2019-04-02 08_54_09-Favorite Movies.jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                    <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;Favorite Movies&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://xybolx.github.io/MovieSearch/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/Xybolx/MovieSearch" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="2018-12-03 17_03_01-Link's Rupee Collector.jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                    <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;Rupee Collector&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://xybolx.github.io/unit-4-game/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/Xybolx/unit-4-game" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="FriendFinder.jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                    <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;Friend Finder&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://friend-finder-stalk-app.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/Xybolx/FriendFinder" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="2018-12-05 21_10_52-Star Trek Trivia.jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                    <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;Star Trek Trivia&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://xybolx.github.io/TriviaGame/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/Xybolx/TriviaGame" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="2019-07-29 12_26_56-Super, inc..jpg" className="d-block w-100" alt="" />
                                    <div className="carousel-caption d-md-block">
                                    <h3><i className="far fa-arrow-alt-circle-left" href="#carouselExampleCaptions" role="button" data-slide="prev"></i>&nbsp;Super, inc.&nbsp;<i className="far fa-arrow-alt-circle-right" href="#carouselExampleCaptions" role="button" data-slide="next"></i></h3>
                                        <h6><a className="port-button" href="https://super-inc-portal.herokuapp.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h6>
                                        <h6><a className="port-button" href="https://github.com/Xybolx/employee-portal" rel="noopener noreferrer" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Portfolio;