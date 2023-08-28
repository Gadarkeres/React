import {useEffect, useState, useRef} from 'react'

const HookUseRef = () => {
      // 1 - useRef
  const numberRef = useRef(0)
  const [counter, setCounter] = useState(0)
  const [counterb, setCounterb] = useState(0)

useEffect(() => {
  numberRef.current = numberRef.current + 1
})

 // 2 - useRef  e dom

 const inputRef = useRef()
 const [text, setText] = useState("")
 const [error, setError] = useState("")

const handleSubmit = (e) => {
e.preventDefault()
if (text === ""){
  setError("Preencha o campo selecionado.")
  inputRef.current.focus()
  return
}

setError("")
setText("")




}
  return (
    
   
    <div>
      <h2>UseRef</h2>
      {/* 1- use ref*/}
      <p>
        O componente renderizou: {numberRef.current} vezes.
      </p>
      <p>
        Counter 1 = {counter}
      </p>
      <button onClick={() => setCounter(counter + 1)}>Acrescentar Counter 1</button>
      <p>
        Counter 2 = {counterb}
      </p>
      <button onClick={() => setCounterb(counterb + 1)}>Acrecentar Counter 2</button>

       {/* 2- use ref e dom*/}
       <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} value={text} onChange={(e) => setText (e.target.value)} />
        
        <input type="submit" value="Enviar" />
        <p>{error}</p>
       </form>

      <hr />
    </div>
  )
}

export default HookUseRef