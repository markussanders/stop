import React from 'react';

const GoalMessage = props => {

    const handleDifficulty = () => {
        return props.difficulty === "IMPOSSIBLE" ? props.score : Math.floor(props.score);
    }
    
    const renderMessage = () => {
        let score = handleDifficulty();
        const stopped = props.action === 'STOP';
        if ((score - 10) === 0 && stopped) {
            return <h2 className="title is-5 has-text-success shake"> WIN </h2>
        } else if (score && stopped) {
            return <h2 className="title is-5 has-text-danger shake"> FAIL </h2>
        }
    }

    return (
        <div className="column has-text-centered">
            {renderMessage()}
        </div>
    )
}

export default GoalMessage;