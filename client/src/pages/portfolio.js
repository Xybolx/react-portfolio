import React, { useState } from "react";
import { Col, Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { items } from "../components/items";
import ProjectDetail from "../components/projectDetail";
import Clock from "../components/clock";

const Portfolio = () => {

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Carousel functions
    const onExiting = () => {
        setIsAnimating(true);
    }

    const onExited = () => {
        setIsAnimating(false);
    }

    const next = () => {
        if (isAnimating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (isAnimating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = newIndex => {
        if (isAnimating) return;
        setActiveIndex(newIndex);
    };

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
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    {items.length ? (
                        <Carousel
                            pause="hover"
                            keyboard={false}
                            interval={false}
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                        >
                            <CarouselIndicators
                                items={items}
                                activeIndex={activeIndex}
                                onClickHandler={goToIndex}
                            />
                            {items.map((item, index) => {
                                return (
                                    <CarouselItem
                                        onExiting={onExiting}
                                        onExited={onExited}
                                        key={index}
                                    >
                                        <ProjectDetail
                                            title={item.title}
                                            src={item.src}
                                            deployHref={item.deployHref}
                                            repoHref={item.repoHref}
                                        />
                                    </CarouselItem>
                                );
                            })}
                            <CarouselControl
                                direction="prev"
                                directionText="Prev"
                                onClickHandler={previous}
                            >
                            </CarouselControl>
                            <CarouselControl
                                direction="next"
                                directionText="Next"
                                onClickHandler={next}
                            >
                            </CarouselControl>
                        </Carousel>
                    ) : (
                            <h4>Loading...</h4>
                        )}
                </Col>
            </div>
        );
    };

export default Portfolio;