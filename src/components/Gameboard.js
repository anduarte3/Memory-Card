import React, { useState } from 'react';
import Header from './Header'
import CardContainer from './CardContainer';

function Gameboard() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [cardsArray, setCardsArray] = useState([]);

    const handleScore = () => {
        setScore((prevScore) => prevScore + 1)
    }
    const handleHighScore = () => {
        if (highScore < score) setHighScore(score)
    }
    const handleGameLogic = (card) => {

        if (!cardsArray.includes(card)) {
            handleCard(card);
            handleScore();
        } else { 
            handleHighScore();
            resetScore();
        }
    }
    const handleCard = (card) => {
        setCardsArray([...cardsArray, card]);
    }
    const resetScore = () => {
        setScore(0)
        setCardsArray([])
    }

    return (
        <div>
            <Header
                score={score}
                highScore={highScore}
            />
            <CardContainer
                score={score}
                highScore={highScore}
                handleGameLogic={handleGameLogic}
            />
        </div>
    )
}

export default Gameboard