import React, { Component } from 'react';

export default class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: this.props.goal,
            difficulty: this.props.difficulty
        }
    }

    renderGoalMessage() {
        const score = this.state.difficulty === 'HARD' ? this.props.score.split(',').pop() : this.props.score;
        if (this.state.goal === score && score) {
            return <h2>WIN</h2>
        } else if (this.state.goal !== score && score) {
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