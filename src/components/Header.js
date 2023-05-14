import React from "react"
import Scoreboard from "./Scoreboard"
import './styles/Header.css'

const Header = () => {
    return (
        <div className="header-style">
            <div className="memory-title">
                <h1>OP Memory Card</h1>
            </div>
            <div className="scoreboard-title">
                <Scoreboard/>
            </div>
        </div>
    )
}
export default Header