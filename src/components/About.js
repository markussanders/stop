import React from 'react';


const About = props => {

    return (
        <div className="modal is-active">
            {/* <div className="modal-background"></div> */}
            <div className="about-background"></div>
            <div className="modal-content modal-difficulty about-text has-text-centered">
                <h2>ABOUT</h2>
                <br/>
                <p>
                    STOP was inspired by a game in a Chinatown cafe in which you can win a free boba/milk tea if you
                    score `10.000` seconds on a blind timer. What makes this seemingly-simple task so difficult is 
                    the struggle of internalizing steady rhythmn. In order to get better at this, I created four modes:
                    "easy" –– where audio cues are played to signify each second, "medium" –– in which cues are only given
                    at the start of the timer, "hard" –– where no cues are played and "impossible" –– similar to "hard" in 
                    which there are no audio cues provided, however, unlike the previous three modes in which achieving `10`
                    seconds suffices a 'win', users must achieve a perfect `10.000`.
                </p>
            <button className="modal-close is-large" aria-label="close" onClick={() => props.toggleAbout()}></button>
            </div>
        </div>
    )
}

export default About;