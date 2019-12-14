import React from 'react';
import './App.css';
import Timer from './components/Timer';
import Goal from './components/Goal';

export default class App extends React.Component {

  state = {
    action: 'begin',
    score: '',
    goal: '10,00,000',
  }
  
  handleAction = action => {
    this.setState({ action });
  }

  handleScore = times => {
    const score = String(times);
    this.setState({ score });
  }

  handleGoal = goalTime => {
    const goal = String(goalTime);
    this.setState({ goal });
  }

  render() {
    console.log('app state', this.state);
    return (
      <div>
        <Timer handleAction={this.handleAction} handleScore={this.handleScore} />
        <h2 id="prompt">{`Press the \`spacebar\` to ${this.state.action}.`}</h2>
        <Goal score={this.state.score} goal={this.state.goal} />
      </div>
    )
  }

};
