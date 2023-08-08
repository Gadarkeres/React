import React from 'react'
import{useContext} from 'react'
import{ContadorContext} from '../context/ContadorContext'
import TrocarContador from '../component/TrocarContador'

const Home = () => {
  const {contador} = useContext(ContadorContext)
  return (
    <div>
      <h2>home</h2>
      <p>valor do contador: {contador}</p>
      <TrocarContador/>

    </div>
  )
}

export default Home;