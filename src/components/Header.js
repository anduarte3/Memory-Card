import React from "react"
import Scoreboard from "./Scoreboard"
import './styles/Header.css'

const Header = (props) => {
    const { score, highScore } = props;

    return (
        <div className="header-style">
            <div className="memory-title">
                <h1>OP Memory Card</h1>
            </div>
            <div className="scoreboard-title">
                <Scoreboard
                    score={score}
                    highScore={highScore}
                />
            </div>
        </div>
    )
}
export default Header