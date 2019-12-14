import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Goal from './components/Goal';
import DifficultyForm from './components/DifficultyForm';

export default class App extends React.Component {

  state = {
    action: 'begin',
    score: '',
    goal: '',
    difficulty: '',
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

  render() {
    return (
      <div>
        <Timer handleAction={this.handleAction} handleScore={this.handleScore} />
        {this.state.difficulty ? 
          <button onClick={() => this.setState({ difficulty: '' }) }>Change Difficulty</button>
          : 
          <DifficultyForm setDifficulty={this.setDifficulty}/>  
        }
        <h2 id="prompt">{`Press the \`spacebar\` to ${this.state.action}.`}</h2>
        <Goal score={this.state.score} goal={this.state.goal} difficulty={this.state.diffuclty} />
      </div>
    )
  }

};
