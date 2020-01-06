import React from 'react';

const DifficultyForm = props => {

    const handleChange = event => {
        props.setDifficulty(event.target.value);
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content modal-difficulty">
                <h2 className="subtitle has-text-light"> CHOOSE YOUR DIFFICULTY: </h2>
                <form className="select is-danger">
                    <select value={props.difficulty} onChange={event => handleChange(event)}>
                        <option value="EASY">EASY</option>
                        <option value="HARD">HARD</option>
                        <option value="IMPOSSIBLE">IMPOSSIBLE</option>
                    </select>
                    <button className="modal-close is-large" aria-label="close" onClick={() => props.handleChangeDifficulty()}></button>
                </form>
            </div>
        </div>
    );
}

export default DifficultyForm;