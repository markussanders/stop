import React, { Component } from 'react';

export default class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: '',
            score: '',
        }
    }

    setScore = score => {
        this.setState({score});
    }

    renderGoalMessage() {
        if (this.state.goal === this.state.score) {
            return <h4>WINNER</h4>
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="goal-message">
                <h4> </h4>
            </div>
        )
    }
}