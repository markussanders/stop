import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Timer from './components/Timer';
import Goal from './components/Goal';
import DifficultyForm from './components/DifficultyForm';

export default class App extends React.Component {

  state = {
    action: 'begin',
    score: '',
    goal: '',
    difficulty: 'HARD',
    changeDifficulty: false,
  }
  
  handleAction = action => {
    this.setState({ action });
  }

  handleScore = times => {
    let score;
    if (this.state.difficulty === 'HARD') {
      const split = times.split(':');
      score = `${split[0]}:${split[1]}`;
    } else if (this.state.difficulty === 'IMPOSSIBLE') {
      score = times;
    }
    this.setState({ score });
  }

  handleGoal = goalTime => {
    const goal = String(goalTime);
    this.setState({ goal });
  }

  setDifficulty = difficulty => {
    this.setState({ difficulty });
    if (difficulty === 'HARD') {
      this.setState({ goal: '10:00' });
    } else if (difficulty === 'IMPOSSIBLE') {
      this.setState({ goal: '10:00:000'});
    }
  }

  handleChangeDifficulty = () => {
    this.setState({ changeDifficulty: !this.state.changeDifficulty });
  }

  render() {
    return (
      <section id="app-content" className="hero is-fullheight is-dark is-bold">
          <Timer handleAction={this.handleAction} handleScore={this.handleScore} />
          <div className="hero-foot">
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
              <h2 id="prompt" className="column has-text-centered">{`Press the \`spacebar\` to ${this.state.action}.`}</h2>
              <Goal score={this.state.score} goal={this.state.goal} difficulty={this.state.diffuclty} action={this.state.action} />
            </nav>
          </div>
      </section>
    )
  }

};
