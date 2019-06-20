import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Clock from "../components/clock";

class Portfolio extends Component {
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
                            <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/">About</NavLink>
                            <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/contact">Contact</NavLink>
                            <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/portfolio">Portfolio<span className="sr-only">(current)</span></NavLink>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron">
                    <h1>Portfolio</h1>
                    <div className="bd-example">
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="2019-06-17 15_39_42-M.E.R.N. Messenger.jpg" className="d-block w-100" alt="" />
                                    <div style={{ backgroundColor: "black" }} className="carousel-caption d-md-block">
                                        <h5>M.E.R.N. Messenger</h5>
                                        <h5><a className="port-button" href="https://mernmessenger.herokuapp.com" target="_blank"><i className="fab fa-github-square"></i>
                                            Deployment</a></h5>
                                        <h5><a className="port-button" href="https://github.com/Xybolx/chat" target="_blank"><i className="fab fa-github-square"></i>
                                            Repository</a></h5>
                                        <p>A MERN Full Stack React chat app.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="..." className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* <h1>Portfolio</h1>
                    <div className="row">
                        <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                            <h4 className="port-title">Planets Hangman</h4>
                            <img className="img-fluid"
                                src="2019-04-02 09_00_04-Star Wars Planets Hangman.jpg" alt=""></img>
                            <div className="linkDiv">
                                <h5><a className="port-button" href="https://xybolx.github.io/JS-Game/" target="_blank"><i className="fab fa-github-square"></i>
                                    Deployment</a></h5>
                            </div>
                            <div>
                                <h5><a className="port-button" href="https://github.com/Xybolx/JS-Game" target="_blank"><i className="fab fa-github-square"></i>
                                    Repository</a></h5>
                            </div>
                        </div>
                    <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                        <h4 className="port-title">Link's Rupee Collector</h4>
                        <img className="img-fluid"
                            src="2018-12-03 17_03_01-Link's Rupee Collector.jpg" alt=""></img>
                        <div className="linkDiv">
                            <h5><a className="port-button" href="https://xybolx.github.io/unit-4-game/" target="_blank"><i className="fab fa-github-square"></i>
                                Deployment</a></h5>
                        </div>
                        <div>
                            <h5><a className="port-button" href="https://github.com/Xybolx/unit-4-game" target="_blank"><i className="fab fa-github-square"></i>
                                Repository</a></h5>
                            </div>
                        </div>       
                    </div>
                    <div className="row">
                        <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                            <h4 className="port-title">Star Wars Express</h4>
                            <img className="img-fluid"
                                src="Star Wars - Express.jpg" alt=""></img>
                            <div className="linkDiv">
                                <h5><a className="port-button" href="https://tranquil-journey-76068.herokuapp.com/" target="_blank"><i className="fab fa-github-square"></i>
                                    Deployment</a></h5>
                            </div>
                            <div>
                                <h5><a className="port-button" href="https://github.com/Xybolx/starwars" target="_blank"><i className="fab fa-github-square"></i>
                                    Repository</a></h5>
                            </div>
                        </div>
                    <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                        <h4 className="port-title">Star Trek Trivia</h4>
                        <img className="img-fluid"
                            src="2018-12-05 21_10_52-Star Trek Trivia.jpg" alt=""></img>
                        <div className="linkDiv">
                            <h5><a className="port-button" href="https://xybolx.github.io/TriviaGame/" target="_blank"><i className="fab fa-github-square"></i>
                                Deployment</a></h5>
                        </div>
                        <div>
                            <h5><a className="port-button" href="https://github.com/Xybolx/TriviaGame" target="_blank"><i className="fab fa-github-square"></i>
                                Repository</a></h5>
                            </div>
                        </div>       
                    </div>
                    <div className="row">
                        <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                            <h4 className="port-title">NES Giphy-Tastic!</h4>
                            <img className="img-fluid"
                                src="NES Giphy-Tastic!.jpg" alt=""></img>
                            <div className="linkDiv">
                                <h5><a className="port-button" href="https://xybolx.github.io/giphy-tastic/" target="_blank"><i className="fab fa-github-square"></i>
                                    Deployment</a></h5>
                            </div>
                            <div>
                                <h5><a className="port-button" href="https://github.com/Xybolx/giphy-tastic" target="_blank"><i className="fab fa-github-square"></i>
                                    Repository</a></h5>
                            </div>
                        </div>
                    <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                        <h4 className="port-title">Catfish</h4>
                        <img className="img-fluid"
                            src="catfish.jpg" alt=""></img>
                        <div className="linkDiv">
                            <h5><a className="port-button" href="https://rocky-fjord-61195.herokuapp.com/" target="_blank"><i className="fab fa-github-square"></i>
                                Deployment</a></h5>
                        </div>
                        <div>
                            <h5><a className="port-button" href="https://github.com/MochaCosine1206/ChatApp" target="_blank"><i className="fab fa-github-square"></i>
                                Repository</a></h5>
                            </div>
                        </div>       
                    </div>
                    <div className="row">
                        <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                            <h4 className="port-title">Favorite Movies</h4>
                            <img className="img-fluid"
                                src="2019-04-02 08_54_09-Favorite Movies.jpg" alt=""></img>
                            <div className="linkDiv">
                                <h5><a className="port-button" href="https://xybolx.github.io/MovieSearch/" target="_blank"><i className="fab fa-github-square"></i>
                                    Deployment</a></h5>
                            </div>
                            <div>
                                <h5><a className="port-button" href="https://github.com/Xybolx/MovieSearch" target="_blank"><i className="fab fa-github-square"></i>
                                    Repository</a></h5>
                            </div>
                        </div>
                    <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                        <h4 className="port-title">Life Invader</h4>
                        <img className="img-fluid"
                            src="FriendFinder.jpg" alt=""></img>
                        <div className="linkDiv">
                            <h5><a className="port-button" href="https://friend-finder-stalk-app.herokuapp.com/" target="_blank"><i className="fab fa-github-square"></i>
                                Deployment</a></h5>
                        </div>
                        <div>
                            <h5><a className="port-button" href="https://github.com/Xybolx/FriendFinder" target="_blank"><i className="fab fa-github-square"></i>
                                Repository</a></h5>
                            </div>
                        </div>       
                    </div>
                    <div className="row">
                        <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                            <h4 className="port-title">M.E.R.N. Messenger</h4>
                            <img className="img-fluid"
                                src="2019-06-08 06_01_46-M.E.R.N. Messenger.jpg" alt=""></img>
                            <div className="linkDiv">
                                <h5><a className="port-button" href="https://mernmessenger.herokuapp.com" target="_blank"><i className="fab fa-github-square"></i>
                                    Deployment</a></h5>
                            </div>
                            <div>
                                <h5><a className="port-button" href="https://github.com/Xybolx/chat" target="_blank"><i className="fab fa-github-square"></i>
                                    Repository</a></h5>
                            </div>
                        </div>
                    <div id="port-boxxT" className="col-sm-6 col-md-6 col-lg-6">
                        <h4 className="port-title">My React Portfolio</h4>
                        <img className="img-fluid"
                            src="2019-06-08 06_03_16-Mat Hayward's React Portfolio.jpg" alt=""></img>
                        <div className="linkDiv">
                            <h5><a className="port-button" href="https://mat-hayward.herokuapp.com/" target="_blank"><i className="fab fa-github-square"></i>
                                Deployment</a></h5>
                        </div>
                        <div>
                            <h5><a className="port-button" href="https://github.com/Xybolx/react-portfolio" target="_blank"><i className="fab fa-github-square"></i>
                                Repository</a></h5>
                            </div>
                        </div>       
                    </div>
                </div> */}
                </div>
            </div>
        );
    };
};

export default Portfolio;