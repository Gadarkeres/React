// 3- alterando contexto
import { useContext} from "react";
import { ContadorContext } from "../context/ContadorContext";



 const TrocarContador = () => {
    const {contador, setContador} = useContext(ContadorContext)
  return (
    <div>
        
    <button onClick={ () => {
        setContador(contador + 1)
    }}>Adicionar valor ao contador</button>
    </div>
  )
}
export default TrocarContador;
