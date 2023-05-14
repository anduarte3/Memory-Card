import React, { useState } from 'react';
import Header from './Header'
import CardContainer from './CardContainer';

function Gameboard() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsArr, addCard] = useState([]);

    const handleScore = () => {
        setScore((prevScore) => prevScore + 1)
    }
    const handleHighScore = () => {
        setHighScore(score);
    }
    const handleGameLogic = () => {

    }
    return (
        <div>
            <Header/>
            Cards here
            {/* Add the cards, then pass the values as props 
            Score, Highest Score, and logic
            */}
            <CardContainer/>
        </div>
    )
}

export default Gameboard