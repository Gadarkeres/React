import "./End.css"

const End = ({retry}) => {
  return (
    <div><h1>Game over</h1>
       <button onClick={retry}>resetar jogo</button>
    </div>
  )
}

export default End