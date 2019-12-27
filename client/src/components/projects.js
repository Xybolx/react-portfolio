import React, { useState } from "react";
import { Col, Carousel, CarouselItem, CarouselIndicators, CarouselControl } from 'reactstrap';
import { items } from "../components/items";
import ProjectDetail from "../components/projectDetail";

const Projects = () => {

    // State
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    // const [portfolioItems, setPortfolioItems] = useState([]);

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
        <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Carousel
                    pause="hover"
                    keyboard={false}
                    interval={false}
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    slide={false}
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
        </Col>
    );
};

export default Projects;