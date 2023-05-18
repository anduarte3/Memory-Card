import React, { useState, useEffect } from 'react';
import Card from "./Card"
import './styles/CardContainer.css'

import ace from "../img/ace.jpg";
import crocodile from "../img/crocodile.jpg";
import luffy from "../img/luffy.jpg";
import marco from "../img/marco.jpg";
import nami from "../img/nami.jpg";
import robin from "../img/robin.jpg";
import sanji from "../img/sanji.jpg";
import shanks from "../img/shanks.jpg";
import usopp from "../img/usopp.jpg";
import zoro from "../img/zoro.jpg";

function CardContainer(props) {
  const { handleGameLogic } = props;
  let newCardsArray = [];

    let characters = [
        {
          src: ace,
          title: 'ace'
        },
        {
          src: crocodile,
          title: 'crocodile'
        },
        {
          src: luffy,
          title: 'luffy'
        },
        {
          src: marco,
          title: 'marco'
        },
        {
          src: nami,
          title: 'nami'
        },
        {
          src: robin,
          title: 'robin'
        },
        {
          src: sanji,
          title: 'sanji'
        },
        {
          src: shanks,
          title: 'shanks'
        },
        {
          src: usopp,
          title: 'usopp'
        },
        {
          src: zoro,
          title: 'zoro'
        }
      ];
    
    //Has to be here otherwise images are not initialized
    const [cards, setNewCards] = useState(characters);

    const shuffle = () =>  {
      const newCards = cards.sort(() => Math.random() - 0.5);
      return newCards
    }
    
    useEffect(() => {
      const shuffledCards = shuffle();
      setNewCards(shuffledCards);
    }, [characters]);

    return (
      <div className='card-container'>
          {cards.map((card) =>
              <Card
                  card={card.src}
                  key={card.title}
                  handleGameLogic={() => handleGameLogic(card)}
              />
          )}
      </div>
    )
}

export default CardContainer