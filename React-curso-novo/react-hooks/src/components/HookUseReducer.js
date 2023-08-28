import {useReducer, useState} from 'react'

const HookUseReducer = () => {
    //1 - Começando com o hook UserReducer
    const [number, dispatch] = useReducer((state,action) => {
        return Math.random(state);
    });


    //2 avançando no UseReducer
    
    const initialTasks = [ //estado inicial da task
        {id:1, text:"fazer alguma coisa"},
        {id:2, text:"fazer outra coisa"}
    ]
    const taskReducer = (state, action) => {
      //função que vai alterar o state
      switch (action.type) {
        case "ADD":
          const newTask = {
            id: Math.random(),
            text: taskText,
          };

          setTaskText("");

          return [...state, newTask];

        case "DELETE":
          return state.filter((task) => task.id !== action.id);
        default:
          return state;
      }
    };
    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks) //declarando useReducer
    
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD" })
    }

    const removeTask = (id) =>{
        dispatchTasks({ type:"DELETE", id })
    }

  return (
    <div>
        <h2>UseReducer</h2>
        <p>Numero: {number}</p>
        <button onClick={dispatch}>Alterar Numero</button>
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
            <label>
                Tarefa: <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
        {tasks.map((task) => {
           return  <li key={task.id} onDoubleClick={() => removeTask(task.id)}>{task.text}</li> 
        })}
        <hr/>
    </div>
  )
}

export default HookUseReducer