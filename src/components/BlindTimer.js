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
        this.handleScore(time);
    }

    handleClick = () => {
        if (!this.state.running && this.state.action === 'START') {
            this.start();
        } else if (this.state.running && this.state.action === 'STOP') {
            this.stop();
        } else if (!this.state.running && this.state.action === 'RESET') {
            this.reset();
        }
        this.props.handleAction(this.state.action);
    }

    handleKeyDown= event => {
        if (event.keyCode === 32) {
            this.handleClick();
        }
    }

    handleScore = time => {
        this.props.handleScore(time);
    }

    buttonColor = () => {
        switch (this.state.action) {
            case 'START':
                return 'is-success';
            case 'STOP':
                return 'is-danger';
            case 'RESET':
                return 'is-warning';
            default:
                return 'is-dark';
        }
    }

    render() {
        return (
        <div className="hero-body">
          <div className="container">
            <div className="container has-text-centered">
                <div className="title is-centered">
                    <h2 className="title timer">{this.state.running ? "??:???" : this.state.time}</h2>
                    <button 
                    className={`button is-large is-outlined ${this.buttonColor()}`}
                    tabIndex = {
                        -1
                    }
                    onClick = {
                        () => this.handleClick()
                    }
                    onKeyDown = {
                        event => this.handleKeyDown(event)
                    } > {
                        this.state.action
                    } </button>
                </div>
            </div>
          </div>
        </div>
        )
    }
}
