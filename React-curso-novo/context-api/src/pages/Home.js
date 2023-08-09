import React from 'react'
//import{useContext} from 'react'
 //import{ContadorContext} from '../context/ContadorContext'
import TrocarContador from '../component/TrocarContador'
// 4 refatorando com hook
import { useContadorContext } from '../hooks/useContadorContext'
//5 context complexo
import {useCordotituloContext} from '../hooks/useCordotituloContext'




const Home = () => {
  // const {contador} = useContext(ContadorContext)
  const {contador} = useContadorContext();


// extrair state
const {color, dispatch} = useCordotituloContext()


//  6 alterando state completo
const definircordotitulo = (color) =>{
  dispatch({type: color});
}



  return (
    <div>
      <h2 style = {{color:color}}>home</h2>
      <p>valor do contador: {contador}</p>
      <TrocarContador/>
      {/* gerando state */}
      <div>
      <button onClick={() => definircordotitulo("RED")}>Vermelho</button>
      <button onClick={() => definircordotitulo("BLUE")}>Azul</button>
      
      </div>
    </div>
  )
}

export default Home;