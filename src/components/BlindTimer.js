import React, { Component } from 'react';

export default class BlindTimer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            time: '00.000',
            action: 'START',
            startTime: null,
            endTime: null,
        }        
    }

    start() {
        let startTime = new Date().getTime();
        this.setState({ startTime, running: true, action: 'STOP' });
    }

    stop() {
        let endTime = new Date().getTime();
        this.setState({ endTime, running: false, action: 'RESET' });
        const duration = this.getDuration(endTime);
        this.formatTime(duration);
    }

    reset() {
        this.setState({ startTime: null, endTime: null, action: 'START', time: '00.000' });
    }

    getDuration = endTime => {
        return endTime - this.state.startTime;
    } 

    formatTime = duration => {

        let ms = duration % 1000;
        if (ms < 10) ms = '00' + ms;
        else if (ms < 100) ms = '0' + ms;

        let s = Math.floor(duration / 1000);
        if (s < 10) s = '0' + s;

        let time = `${s}.${ms}`;

        this.setState({ time });
    }

    handleClick = () => {
        if (!this.state.running && this.state.action === 'START') {
            this.start();
        } else if (this.state.running &&  this.state.action === 'STOP') {
            this.stop();
        } else if (!this.state.running && this.state.action === 'RESET') {
            this.reset();
        }
    }

    handleKeyDown= event => {
        if (event.keyCode === 32) {
            this.handleClick();
        }
    }

    render() {
        console.log('state = ', this.state);
        return (
            <div>
                <h2>{this.state.running ? "??:???" : this.state.time}</h2>
                <button tabIndex={-1} onClick={() => this.handleClick()} onKeyDown={event => this.handleKeyDown(event)}>{this.state.action}</button>
            </div>
        )
    }
}