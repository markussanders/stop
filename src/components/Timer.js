import React, { Component } from 'react';

export default class Timer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            times: [0, 0, 0],
            time: null,
        }
        this.reset();
    }

    reset() {
        const times = [0, 0, 0];
        this.setState({ times });
        this.props.handleScore('');
    }

    start() {
        if (!this.state.time) this.setState({time: performance.now()});
        if (!this.state.running) {
            this.setState({running: true});
            requestAnimationFrame(() => this.step(this.state.time));
        }
    }

    stop() {
        this.setState({
            running: false,
            time: null,
        });
        const formattedTime = this.format(this.state.times);
        this.props.handleScore(formattedTime);
    }

    step(timestamp) {
        if (!this.state.running) return;
        this.calculate(timestamp);
        this.setState({ time: timestamp });
        requestAnimationFrame(() => this.step(timestamp));
    }
    
    calculate(timestamp) {
        let times = this.state.times;
        
        setInterval(() => {
            times[2] === 1000 ? times[2] = 0 : times[2] += 1;
        }, 1)

        if (times[2] >= 100) {
            times[1] += 1;
        }
        
        if (times[1] >= 60) {
            times[0] += 1;
            times[1] -= 60;
        }
        this.setState({ times });
    }

    format(times) {
        const pad = (value, count, ms=undefined) => {
            let result = value.toString();
            for (let i; result.length < count; --count) {
                if (ms) result += '0';
                result = '0' + result;
            }
            return result;
        }
        return `${pad(times[0], 2)}:${pad(times[1], 2)}:${pad(times[2], 2, true)}`;
    }

    handleKeyDown(event) {
        if (event.keyCode === 32) {
            if (this.state.running) {
                if (this.state.times[2] > 0 ) {
                    this.stop();
                    this.props.handleAction('reset');
                } else {
                    this.reset();
                    this.props.handleAction('start');
                }
            } else if (!this.state.running) {
                if (this.state.times[2] > 0) {
                    this.reset();
                    this.props.handleAction('start');
                } else {
                    this.start();
                    this.props.handleAction('stop');
                }
            }
        }
    }

    render() {
        return (
            <div className="hero-body"
            onKeyDown={event => this.handleKeyDown(event)}
            tabIndex={-1}>
                <div className="container has-text-centered">
                    <div className="title is-centered">
                        <h2 className="title timer">
                            {this.format(this.state.times)}
                        </h2>
                    </div>
                </div>
            </div>
        ) 
    }
    

    
}
