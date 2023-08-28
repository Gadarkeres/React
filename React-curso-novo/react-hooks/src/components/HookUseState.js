import React, { useState } from 'react'

export const HookUseState = () => {
    // 1- useState
    let userName = "João";
    const [name, SetName] = useState("Matheus");

    const changeNames = () => {
      userName = "João Souza";

      SetName("Matheus Rafael");

      console.log(name);
    };
    console.log(userName);
 // 2- useState e input

 const [age, setAge] = useState(18)

 const handleSubmit = (e) =>{
    e.preventDefault()

    // envio a uma API
    
    console.log(age)
 }



  return (
    <div>
      {/* 1- useState */}
      <h2>useState</h2>
      <p>Varivel: {userName}</p>
      <p>UseState: {name}</p>

      <button onClick={changeNames}>Mudar nome</button>
            {/* 2- useState com input */}
            <p>Digite sua idade</p>

            <form onSubmit={handleSubmit}>
            <label>
                Idade:<input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
                <input type="submit" value="enviar" />
            </form>
            <p>Você tem {age} anos</p>
      <hr></hr>
    </div>
  );
}
