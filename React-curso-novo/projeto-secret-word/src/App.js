//css
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import {wordsList} from "./data/wordsList"

//Componentes
import Telainicial from './components/Telainicial';
import Game from './components/Game';
import End from './components/End';



const stages = [
  {id: 1, name:"começo"},
  {id: 2, name:"Game"},
  {id: 1, name:"End"},

]



function App() {
  // começando estagio no array de indice 0 da variavel ''stages''
  const [gameStage, setGameStage] = useState (stages[0].name);
  
  // pegandos os dados da variavel wordslist e passar para ''words''

  const[pickedWord, setpickedWord] = useState("")
  const[pickedCategory, setpickedCategory] = useState("")
  const [letters, setLetters] = useState("")
  const[Words] = useState(wordsList)

  const[guessedLetters, setguessedLetters] = useState("")
  const[wrongLetters, setwrongLetters] = useState("")
  const[guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(3)
  
  const pickWordAndCategory = () =>{
   // categoria
    const categories = Object.keys(Words)
    const category = categories[Math.floor(Math.random()* Object.keys(categories).length)]

    console.log(category)
    // palavra

      const word = Words[category]
      [Math.floor(Math.random() * Words[category].length)]

      console.log(word)
      return{word, category}
  }
  //começa o jogo de palavras
   const startgame = () =>{
    // pegar letras e pegar categoria

   const  {word, category} = pickWordAndCategory();

   //creando um array das letras
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.tolowerCase())

    console.log(word, category)
    
    setpickedWord(word);
    setpickedCategory(category);
    setLetters(wordLetters);


    
    setGameStage(stages[1].name)
   }

   //processo da letra do input
   const verifyLetter = () =>{
    setGameStage(stages[2].name)
   }

   // restaura o jogo
   const retry = () => {
    setGameStage(stages[0].name)
   }

  return (
    <div className="App">
       {/* se o estagio do jogo for ''começo'' > tela inicial */}
    {gameStage === 'começo' &&  <Telainicial startgame={startgame} /> }
    {gameStage === 'Game' &&  <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory = {pickedCategory} letters = {letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score}/> }
    {gameStage === 'End' &&  <End retry={retry}/>}
    
    </div>
  );
}

export default App;
