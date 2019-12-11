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
    }

    start() {
        console.log('performance.now()', performance.now());
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
        })
    }

    step(timestamp) {
        if (!this.state.running) return;
        this.calculate(timestamp);
        this.setState({time: timestamp});
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
        const pad = (value, count) => {
            let result = value.toString();
            for (let i; result.length < count; --count) {
                result = '0' + result;
            }
            return result;
        }

        return `${pad(times[0], 2)}:${pad(times[1], 2)}:${pad(times[2], 2)}`;
    }

    handleKeyDown(event) {
        if (event.keyCode === 32) {
            switch (this.state.running) {
                case false:
                    this.start();
                    break;
                case true:
                    this.stop();
                    break;
                default: 
                    this.reset();
            }
        }

    }

    render() {
        return (
            <div className="timer"
             onKeyDown={event => this.handleKeyDown(event)}
             tabIndex={-1}>
                {this.format(this.state.times)}
            </div>
        ) 
    }
    

    
}
