import React from 'react';

const DifficultyForm = props => {

    const handleChange = event => {
        props.setDifficulty(event.target.value);
        props.handleChangeDifficulty();
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content modal-difficulty">
                <form className="select is-danger">
                    <h2> CHOOSE YOUR DIFFICULTY: </h2>
                    <select value={props.difficulty} onChange={event => handleChange(event)}>
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