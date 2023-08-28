import {useCallback, useState} from 'react'
import List from './List'

const HookUseCallback = () => {
    const [count, setCount] = useState(0)

    const getitemsfromDatabase = useCallback (() => {
        return['a', 'b' ,'c']
    },[])
    
  return (
    <div>
        <h2>UseCallBack</h2>
        <List getitems={getitemsfromDatabase}></List>
        <button onClick={() => setCount(count + 1)}>Alterar</button>
        <p>{count}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback