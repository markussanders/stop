import React from 'react';
import './App.css';
import Timer from './components/Timer';

export default class App extends React.Component {

  state = {
    action: 'begin'
  }
  
  handleAction = action => {
    this.setState({action});
  }

  render() {
    return (
      <div>
        <Timer handleAction={this.handleAction} />
        <h2 id="prompt">{`Press the \`spacebar\` to ${this.state.action}.`}</h2>
      </div>
    )
  }

};
