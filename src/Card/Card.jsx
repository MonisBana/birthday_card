import React, { useState } from 'react'
import "./Card.scss"
import { isMobile } from 'react-device-detect';
import Cake from '../Cake/Cake';

const Card = () => {
    const [toggle, setToggle] = useState(false)
    let cardStyle = "card"
    if (isMobile & toggle) {
        cardStyle = "card is-flipped"
    }
    return (
        <div className="scene" onClick={() => setToggle(!toggle)}>
            <div className={cardStyle}>
                <div className="card__face card__face--front" style={{ display: toggle ? 'none' : null }}>
                    <Cake toggle={toggle} />
                </div>
                <div className="card__face card__face--back" style={{ display: !toggle ? 'none' : null }}>
                    <div className="text-container">
                        <p id="head">Happy Birthday Aliza!</p>
                        <p>I wish you have a great day and a great year ahead.<br />I love you more than you can imagine.</p>
                        <p>May this day be as special as you are to me!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
