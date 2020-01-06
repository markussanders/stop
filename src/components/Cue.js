import React, { Component } from 'react'

export default class Cue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            visualCues: this.props.visualCues
        }
    }

    incrementCount() {
        setInterval(() => {
            return this.state.count < 110 ? this.setState({count: this.state.count + 10}) : null;
        }, 1000)
    }

    handleColorChange() {
        let count = this.state.count;
        if (count <= 30) {
            return 'progress is-danger';
        } else if (count > 30 && count <= 60) {
            return 'progress is-warning';
        } else if (count > 60 && count <= 90) {
            return 'progress is-primary';
        } else if (count === 100) {
            return 'progress is-success shake';
        } else if (count > 100) {
            return 'progress is-danger shake';
        } else {
            return 'progress is-dark';
        }
    }

    componentDidMount() {
        this.incrementCount();
    }

    render() {
        return (
            <div className="column has-text-centered">
                <br/>
                <progress className={this.handleColorChange()} value={`${this.state.count}`} max="100">{`${this.state.count}%`}</progress>
            </div>
        )
    }
}

