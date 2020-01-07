import React from 'react';
import Teas from '../photos/bingo-teas.jpg';
import StoreFront from '../photos/storefront.jpg';

const About = props => {

    return (
        <div className="modal is-active">
            <div className="about-background"></div>
            <div className="modal-content modal-difficulty about-text has-text-centered">
                <h2>ABOUT</h2>
                <br/>
                <p>
                    <em>10 Seconds!</em> was inspired by a game in a Chicago Chinatown cafe in which you can win a free boba/milk tea
                    if you score `10.000` seconds on a blind timer. 
                    <br/><br/>
                    What makes this seemingly-simple task so difficult is the struggle of internalizing steady rhythmn.
                    <br/>
                    <br/> In order to get better at this, I created three modes:
                    <br/> "EASY" –– where visual cues are displayed to signify each second,
                    <br/> "HARD" –– where no cues are shown and
                    <br/> "IMPOSSIBLE" –– similar to "HARD" in which there are no visual cues provided, however, unlike the previous
                    three modes in which achieving ten whole-seconds suffices a 'win', users must achieve a <em>perfect</em> "10.000".
                    <br/><br/>
                    <div className="columns bingo-images">
                        <img className="column" src={StoreFront} alt="Store front of Bingo Tea in Chicago's Chinatown"/>
                        <img className="column" src={Teas} alt="Three beverages from Bingo Tea in Chicago's Chinatown"/>
                    </div>
                </p>
            <button className="modal-close is-large" aria-label="close" onClick={() => props.toggleAbout()}></button>
            </div>
        </div>
    )
}

export default About;