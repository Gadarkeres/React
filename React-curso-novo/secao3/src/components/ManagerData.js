import { useState } from "react";


const ManagerData = () => {
 const [Number, setNumber] = useState(15);


  return (
    <div>
      <div>
      </div>
      <div>
        <p>Valor:{Number}</p>
        <button onClick={() => setNumber(25)}>Mudar o state</button>
      </div>
    </div>
  )
}

export default ManagerData