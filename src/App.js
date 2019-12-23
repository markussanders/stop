import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import DifficultyForm from './components/DifficultyForm';
import BlindTimer from './components/BlindTimer';
import GoalMessage from './components/GoalMessage';
import Taunt from './components/Taunt';
import About from './components/About';
import Navbar from './containers/Navbar';

export default class App extends React.Component {

  state = {
    action: 'begin',
    score: '',
    difficulty: 'HARD',
    changeDifficulty: false,
    isLight: true,
    isRunning: false,
    renderAbout: false,
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

  pivotLightDark = () => {
    this.setState({isLight: !this.state.isLight});
  }
  
  color() {
    return this.state.isLight ? 'is-light' : 'is-dark';
  }

  toggleRunning = () => {
    this.setState({isRunning: !this.state.isRunning});
  }

  toggleAbout = () => {
    this.setState({renderAbout: !this.state.renderAbout});
  }
  render() {
    return (
      <section id="app-content" className={`hero is-fullheight ${this.color()} is-bold`}>
        <Navbar toggleAbout={this.toggleAbout}/>
        {this.state.renderAbout ? <About toggleAbout={this.toggleAbout} /> : null}
        <BlindTimer handleScore={this.handleScore} handleAction={this.handleAction} toggleRunning={this.toggleRunning}/>
        <div className = "hero-foot">
          <nav className="columns">
            <div className="column has-text-centered">
              <br/>
              <h2>DIFFICULTY:
                <span className="has-text-danger"> {this.state.difficulty}</span>
                <span className="icon" onClick={() => this.handleChangeDifficulty()}><i className="fas fa-edit"></i></span>
              </h2>
            </div>
            {
              this.state.changeDifficulty ?
                <DifficultyForm setDifficulty={this.setDifficulty} handleChangeDifficulty={this.handleChangeDifficulty} difficulty={this.state.difficulty}/>
                :
                null
            }
            <div className="column has-text-centered">
                <span className="icon" onClick={() => this.pivotLightDark() }><i className="fas fa-adjust"></i></span>
                <h4>Light/Dark</h4>
            </div>
            {
              this.state.isRunning ? 
                <Taunt isRunning={this.state.isRunning} /> 
                :
                <GoalMessage score={this.state.score} action={this.state.action} difficulty={this.state.difficulty}/>
            }
          </nav>
        </div>
      </section>
    )
  }
};