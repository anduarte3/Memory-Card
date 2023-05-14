import './styles/Card.css'

//Logic responsible for adding a card and create button
//Card container passes props of the card

const Card = (props) => {

  return (
    <div className='card-align'>
      <button className="button-op">
        <img src={props.card} alt={props.title}/>
      </button>

    </div>
  )
}

export default Card