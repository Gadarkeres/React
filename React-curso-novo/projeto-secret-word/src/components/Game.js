import './Game.css'

const Game = ({verifyLetter, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivinha e palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span> {pickedCategory}</span>
      </h3>
      <p>Você ainda tem xxx {guesses}(s)</p>
      <div className="wordContainer">
       {letters.map((letter, i) => (
        guessedLetters.includes(letter) ?(
          <span key={i} className='letter'></span>
        ): (
          <span key={i} className="blancksquare"></span>
        )
       ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength={1} required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras ja utilizadas:</p>
        {wrongLetters.map ((letter, i ) =>{
          <span key={i}>{letter}</span>
        })}
      </div>
    </div>
  )
}

export default Game