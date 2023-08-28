import {useState, useEffect, useLayoutEffect} from 'react'

const UseLayoutEffect = () => {

    const [name , setName] = useState("Algum nome")

    useEffect(() => {
    console.log("2")
    setName("mudou de novo")
    },[])

    useLayoutEffect(() => {
        console.log("1")
        setName("OUTRO NOME")
    },[])
console.log(name)
  return (
    <div>
        <h2>
            UseLayoutEffect
        </h2>
        <p>
            Nome: {name  }
        </p>
        <hr />
    </div>
  )
}

export default UseLayoutEffect