import React, { Component } from 'react'

export default class Cue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            message: '',
            color: '',
        }
    }

    incrementCount() {
        setInterval(() => {
            return this.state.count < 110 ? this.setState({count: this.state.count + 1}) : null;
        }, 100)
    }

    listenForColorChange() {
        setInterval(() => {
            this.setMessageColor();
        }, 100);
    }

    setMessageColor() {
        let count = this.state.count;
        let color = '';
        let message = '';
        if (count <= 30) {
            color = 'progress is-danger';
            message = 'Keep going...';
        } else if (count > 30 && count <= 60) {
            color = 'progress is-warning';
            message = 'Almost...';
        } else if (count > 60 && count < 100) {
            color = 'progress is-primary';
            message = 'Get ready...';
        } else if (count >= 100 && count < 110) {
            color = 'progress is-success shake';
            message = 'NOW!';
        } else if (count >= 110) {
            color = 'progress is-danger shake';
            message = 'Too slow 😣';
        } else {
            message = 'Look here for help.';
            color = 'progress is-dark';
        }
        this.setState({ color, message })
    }

    componentDidMount() {
        this.listenForColorChange();
        this.incrementCount();
    }

    render() {
        return (
            <div className="column has-text-centered">
                <div className="subtitle has-text-danger">
                    <h4>{this.state.message}</h4>
                    <progress className={this.state.color} value={`${this.state.count}`} max="100">{`${this.state.count}%`}</progress>
                </div>
            </div>
        )
    }
}

