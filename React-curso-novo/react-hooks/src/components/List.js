import {useState, useEffect} from 'react'

const List = ({getitems}) => {
    const [myitems, setMyitems] = useState([])

    useEffect(() => {

        console.log("Buscando items do db...")

        setMyitems(getitems)
    }, [getitems])

  return (
    <div>
        {myitems && myitems.map((item) => (
            <p key={item}>{item}</p>
        ))}
    </div>
  )
}

export default List