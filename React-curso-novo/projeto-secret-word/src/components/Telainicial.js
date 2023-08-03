import "./Telainicial.css"

const Telainicial = ({startgame}) => {
  return (
    <div className="Start">
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para começar a jogar!</p>
        <button onClick={startgame}>Começar o jogo</button>
    </div>
  )
}

export default Telainicial