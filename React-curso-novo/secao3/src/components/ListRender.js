import { useState } from "react"


const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

    const [users] = useState([
        {id: 13221, name : "Matheus", age:31},
        {id: 123123, name : "João", age:51},
        {id: 42322, name : "Pedro", age:44},

    ])
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}> {item}</li>
            ))}
        </ul>

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - idade: {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender