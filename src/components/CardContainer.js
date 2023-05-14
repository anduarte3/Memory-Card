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

const CardContainer = () => {

    let images = [
        {
          src: ace,
          title: 'ace',
        //   backgroundColor: 'rgb(255 223 137)',
        //   borderStyle: '1px solid rgb(255 223 137)',
        },
        {
          src: crocodile,
          title: 'crocodile',
        //   backgroundColor: 'rgb(54 145 154)',
        //   borderStyle: '1px solid rgb(54 145 154)',
        },
        {
          src: luffy,
          title: 'luffy',
        //   backgroundColor: 'rgb(119 4 4)',
        //   borderStyle: '1px solid rgb(119 4 4)',
        },
        {
          src: marco,
          title: 'marco',
        //   backgroundColor: 'rgb(76 136 89)',
        //   borderStyle: '1px solid rgb(76 136 89)',
        },
        {
          src: nami,
          title: 'nami',
        //   backgroundColor: 'rgb(111 31 0)',
        //   borderStyle: '1px solid rgb(111 31 0)',
        },
        {
          src: robin,
          title: 'robin',
        //   backgroundColor: 'rgb(255 141 0)',
        //   borderStyle: '1px solid rgb(255 141 0)',
        },
        {
          src: sanji,
          title: 'sanji',
        //   backgroundColor: 'rgb(52 52 60)',
        //   borderStyle: '1px solid rgb(52 52 60)',
        },
        {
          src: shanks,
          title: 'shanks',
        //   backgroundColor: 'rgb(245 194 80)',
        //   borderStyle: '1px solid rgb(245 194 80)',
        },
        {
          src: usopp,
          title: 'usopp',
          backgroundColor: 'rgb(136 96 6)',
        //   borderStyle: '1px solid rgb(136 96 6)',
        },
        {
          src: zoro,
          title: 'zoro',
          backgroundColor: 'rgb(255 148 148)',
        //   borderStyle: '1px solid rgb(255 148 148)',
        }
      ];

    const [cards, setNewCards] = useState(images);

    return (
        <div className='card-container'>
            {cards.map((card) =>
                <Card
                    card={card.src}
                    key={card.title}
                    // handleGameLogic={handleGameLogic}
                />
            )}
            {/* {images.map(index => {
                index
            })}
            <h1></h1> */}
            
        </div>
    )
}
export default CardContainer