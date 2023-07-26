import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState (false);
    
    const[name, setName] = useState ("Matheus");
  
  
  
    return (
    <div>
        <h1>isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>agora é falso</p>}
        <h1>IF ternário</h1>
        {name === "João" ? (
           <p> o nome é João!</p>
        ) : (
            <p>nome não encontrado!</p>
        )}
       <div>
       <button onClick={ () => setName("João")}>Clique aqui!</button>
       </div>
    </div>
  )
}

export default ConditionalRender