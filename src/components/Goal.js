import React, { Component } from 'react';

export default class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: this.props.goal,
        }
    }

    renderGoalMessage() {
        if (this.state.goal === this.props.score) {
            return <h2>WIN</h2>
        } else if (this.state.goal !== this.props.score && this.props.score) {
            return <h2>FAIL</h2>
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="goal-message">
                {this.renderGoalMessage()}
            </div>
        )
    }
}