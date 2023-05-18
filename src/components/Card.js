import './styles/Card.css'

//Logic responsible for adding a card and create button
//Card container passes props of the card

const Card = (props) => {
  const { handleGameLogic, card, title } = props;

  return (
    <div className='card-align'>
      <button className="button-op" onClick={handleGameLogic}>
        <img src={card} alt={title}/>
      </button>

    </div>
  )
}

export default Card