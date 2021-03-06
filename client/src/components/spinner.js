import React from 'react';

const spinner = () => {
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            &nbsp;Loading...
        </div>
    );
};

export default spinner;
