import React from 'react'
import { HookUseState } from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import UseMemo from '../components/UseMemo'
import UseLayoutEffect from '../components/UseLayoutEffect'
import HookUseImperativehandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'
// useContext
import { useContext } from 'react'
import { algumcontext } from '../components/HookUseContext'


const Home = () => {

  const {menuisvisible} = useContext(algumcontext);

  return (
    <div>
        <HookUseState/>
        <HookUseReducer/>
        <HookUseEffect/>
        <h2>UseContext</h2>
      {menuisvisible && <p>valor esta como true</p>}
      {menuisvisible === false && <p> Menu esta setado como false</p>}
          <hr />
          <HookUseRef/>
          <HookUseCallback/>
          <UseMemo/>
          <UseLayoutEffect/>
          <HookUseImperativehandle/>
          <HookCustom/>
      

        
    </div>
  )
}

export default Home