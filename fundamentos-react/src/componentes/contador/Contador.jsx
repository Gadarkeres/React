import React, { useState } from "react";

export default () => {
const [valor, setValor] = useState(0);
function aumentar (){
    setValor((prevValor) => prevValor + 1)
}
function limpar () {
    setValor((prevValor) => prevValor = 0)
}

function reduzir(){
    setValor((prevValor) => prevValor  -1)
}

    return(
        <div>
            <p>aqui temos um contador</p>
            <p>{valor}</p>
            <div>
                <button style={{ marginRight: '10px' }} onClick={aumentar}>+</button>
                <button style={{ marginRight: '10px' }} onClick={limpar}>limpar</button>
                <button onClick={reduzir}>-</button>
            </div>
        </div>
    )
}
