import React, { Suspense, lazy} from "react";
import Spinner from "../components/spinner";

// lazy imports
const Projects = lazy(() => import("../components/projects"));

const Portfolio = () => {
    return (
        <div>
            <br />
            <h1>My Portfolio</h1>
            <Suspense fallback={<Spinner />}>
                <Projects />
            </Suspense>
        </div>
    );
};

export default Portfolio;