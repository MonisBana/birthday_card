import React, { useState } from 'react'
import "./Card.scss"
import { isMobile } from 'react-device-detect';

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
                    <div className="cover-shape-large">
                        <div className="shape-diamond"></div>
                        <div className="shape-block"></div>
                    </div>
                    <div className="cover-shape-small">
                        <div className="shape-diamond"></div>
                        <div className="shape-block">
                            <div className="cake">
                                <div className="layer layer-bottom"></div>
                                <div className="layer layer-middle"></div>
                                <div className="layer layer-top"></div>
                                <div className="icing"></div>
                                <div className="drip drip1"></div>
                                <div className="drip drip2"></div>
                                <div className="drip drip3"></div>
                                <div className="candle">
                                    <div className="flame"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card__face card__face--back" style={{ display: !toggle ? 'none' : null }}>
                    <div className="text-container">
                        <p id="head">Happy Birthday Mom!</p>
                        <p>Your first digital birthday card! <span className="strikethrough">Handcrafted</span> Handcoded from scratch just for you.</p>
                        <p>Hope your day goes great!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
