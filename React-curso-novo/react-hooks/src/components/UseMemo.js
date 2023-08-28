import {useState, useMemo, useEffect} from 'react'

const UseMemo = () => {
    
    const [number, setNumber] = useState(0)
    
    // const premiumnumbers = ["0", "20", "40"];
    const premiumnumbers = useMemo(() => {
   return ["0", "20", "40"];
    },[]);


    useEffect(() => { 
        console.log("premium numbers foram alterados")
    },[premiumnumbers])
    
    return (
    <div>
        <h2>UseMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)} />
        {premiumnumbers.includes(number)? <p>Acertou o numero!</p> : ""}

        <hr />
    </div>
  )
}

export default UseMemo