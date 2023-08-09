import { useContadorContext } from "../hooks/useContadorContext";
import { useCordotituloContext } from "../hooks/useCordotituloContext";

const About = () => {

  const {contador} = useContadorContext();
  const {color} = useCordotituloContext()
  return (
    <div>
      <p>
      <h2 style={{color: color}}>About</h2>
      <p>valor do contador: {contador}</p>
      </p>
    </div>
  )
}

export default About