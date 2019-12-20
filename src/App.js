import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import DifficultyForm from './components/DifficultyForm';
import BlindTimer from './components/BlindTimer';
import GoalMessage from './components/GoalMessage';

export default class App extends React.Component {

  state = {
    action: 'begin',
    score: '',
    difficulty: 'HARD',
    changeDifficulty: false,
  }
  
  handleAction = action => {
    this.setState({ action });
  }

  handleScore = time => {
    this.setState({ score: time });
  }

  handleChangeDifficulty = () => {
    this.setState({ changeDifficulty: !this.state.changeDifficulty });
  }

  setDifficulty = difficulty => {
    this.setState({ difficulty });
    this.handleChangeDifficulty();
  }

  render() {
    return (
      <section id="app-content" className="hero is-fullheight is-dark is-bold">
          <BlindTimer handleScore={this.handleScore} handleAction={this.handleAction} />
        <div className = "hero-foot">
          <nav className="columns">
            <div className="column has-text-centered">
              <h2>DIFFICULTY:
                <span className="has-text-danger"> {this.state.difficulty}</span>
                <span className="icon" onClick={() => this.handleChangeDifficulty()}><i className="fas fa-edit"></i></span>
              </h2>
            </div>
            {
              this.state.changeDifficulty ?
                <DifficultyForm setDifficulty = {
                  this.setDifficulty
                }
                handleChangeDifficulty = {
                  this.handleChangeDifficulty
                }
                difficulty = {
                  this.state.difficulty
                }
              /> : null}
            <GoalMessage score={this.state.score} action={this.state.action} difficulty={this.state.difficulty}/>
          </nav>
        </div>
      </section>
    )
  }

};