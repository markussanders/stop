import React, { Component } from 'react';

export default class Taunt extends Component {
    constructor(props){
        super(props);
        this.state = {
            taunt: '',
            taunts: [
                'too slow',
                '2 mississippi',
                '4 mississippi',
                'stop!',
                'can you count?',
                'wait for it..',
            ]
        }
    }

    generateRandomTaunt = () => {
        setInterval(() => {
            this.setState({
                taunt: this.state.taunts[Math.floor(Math.random() * this.state.taunts.length)]
            })
        }, 1800);
    }
    
    render(){
        this.generateRandomTaunt();
        return (
            <div className="column has-text-centered">
                <br/>
                <h2 className="title is-5 has-text-warning">
                    { this.props.isRunning ? this.state.taunt : null }
                </h2>
            </div>
        )
    }
}