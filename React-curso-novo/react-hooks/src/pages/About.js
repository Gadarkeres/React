import React, { useContext } from 'react'
import { HookUseContext, algumcontext } from '../components/HookUseContext'

const About = () => {
  const {menuisvisible, setMenuisvisible} = useContext(algumcontext);

  const Changemenu = () => {
    if(menuisvisible === false){
      setMenuisvisible (true)
    } else {
      setMenuisvisible (false)
    }
  }
  return (
    <div>
      {menuisvisible && <p>Menu esta setado como true!</p>}
      {menuisvisible === false && <p> Menu esta setado como false</p>}
      <button onClick={Changemenu}> trocar estado do menu</button>
    </div>
  )
}

export default About