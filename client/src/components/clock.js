import React, { Component } from "react";
import moment from "moment";

class Clock extends Component {
    state = {
        clock: ''
    };

    loadClock = () => {
        this.setState({ clock: moment().format("h:mm:ssa") })
    };

    componentDidMount() {
        this.loadClock();
        this.handleClockInterval = setInterval(this.loadClock, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.handleClockInterval);
    };

    render() {

        return (
            <div className="clock">
                {this.state.clock ? (
                `${this.state.clock}`
                
                ) : (
                    <h5><i className="fab fa-react fa-spin"></i></h5>
                        )}
            </div>
        );
    };
};

export default Clock;