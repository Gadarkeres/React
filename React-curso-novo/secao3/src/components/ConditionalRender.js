import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState (false);
  
  
  
    return (
    <div>
        <h1>isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>agora é falso</p>}
    </div>
  )
}

export default ConditionalRender