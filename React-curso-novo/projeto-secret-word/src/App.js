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
  const[Words] = useState(wordsList)
  
   const startgame = () =>{
    setGameStage(stages[1].name)
   }

  return (
    <div className="App">
       {/* se o estagio do jogo for ''começo'' > tela inicial */}
    {gameStage === 'começo' &&  <Telainicial startgame={startgame} /> }
    {gameStage === 'Game' &&  <Game/> }
    {gameStage === 'End' &&  <End/> }
    
    </div>
  );
}

export default App;
