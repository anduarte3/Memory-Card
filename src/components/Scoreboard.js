import './styles/Scoreboard.css'
const Scoreboard = (props) => {
    const { score, highScore } = props;

    return (
        <div>
            <div className="score">Score: {score}</div>
            <div className="highest-score">Highest Score: {highScore}</div>
        </div>
    )
}
export default Scoreboard