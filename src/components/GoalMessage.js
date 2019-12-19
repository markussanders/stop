import React, { Component } from 'react';


export default class GoalMessage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            difficulty: '',
        }
    }
    
    handleDifficulty() {
        return this.state.difficulty === "IMPOSSIBLE" ? this.props.score : Math.floor(this.props.score);
    }
    
    renderMessage = () => {
        let score = this.handleDifficulty();
        const stopped = this.props.action === 'STOP';
        if (score === 10 && stopped) {
            return <h2 className="title is-5 has-text-success shake"> WIN </h2>
        } else if (this.state.goal !== score && stopped) {
            return <h2 className="title is-5 has-text-danger shake"> FAIL </h2>
        }
    }

    render() {
        console.log('this.props.action = ', this.props.action);
        return (
            <div className="column has-text-centered">
                {this.renderMessage()}
            </div>
        )
    }
}
