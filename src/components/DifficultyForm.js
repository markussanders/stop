import React, { Component } from 'react'

export default class DifficultyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.setDifficulty(this.state.value);
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label> DIFFICULTY:
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="">--</option>
                <option value="HARD">HARD</option>
                <option value="IMPOSSIBLE">IMPOSSIBLE</option>
            </select>
            </label>
            <input type="submit" value="COMMIT" />
        </form>
        );
  }
}       