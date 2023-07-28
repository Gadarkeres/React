import Styles from './Car.module.css'

const Car = ({nome, km, cor}) => {
  return (
    <div>
        <h1>{nome}</h1>
        <p>KM: {km}</p>
        <p>Cor: {cor}</p>
    </div>
  )
}

export default Car