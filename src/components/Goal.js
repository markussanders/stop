import React, { Component } from 'react';

export default class Goal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal: this.props.goal,
            difficulty: this.props.difficulty,
            visbile: false
        }
    }

    renderGoalMessage() {
        if (this.props.action === 'reset') {
            const score = this.state.difficulty === 'HARD' ? this.props.score.split(',').pop() : this.props.score;
            if (this.state.goal === score) {
                return <h2 className="title is-5 has-text-success shake">WIN</h2>
            } else if (this.state.goal !== score) {
                return <h2 className="title is-5 has-text-danger shake">FAIL</h2>
            }
        } 
        return null;
    }

    render() {
        return (
            <div className="column has-text-centered">
                {this.renderGoalMessage()}
            </div>
        )
    }
}