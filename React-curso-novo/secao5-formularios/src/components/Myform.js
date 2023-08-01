import { useState } from 'react'
import './MyForm.css'
const Myform = ({user}) => {
    //6 - inputs controlados 
 // 3- gerenciamento de dados //
 
 const [name, setName] = useState( user ? user.name : '')
 const [email, setEmail] = useState( user ? user.email : "")
 const [texto, setTexto] = useState()
 const [função, setFunção] = useState()

 const handleName = (e) =>{
    setName(e.target.value);
 }


const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Enviando o formulario")
    console.log(name, email, texto, função);

    //7 limpar form

    setName('')
    setEmail('')
    setTexto ('')
}





  return (
    <div>
         { /* 5- envio de form*/}


        { /* 1- criação de form*/}
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="name"> Nome:</label> 
                <input type="text" name="name"onChange={handleName} placeholder='Digite seu nome' value={name}/>
            </div>
            { /* 2- Label envolvendo o input*/}
            <label>
            { /* 4- Simplificação de manipulação de state*/}
                <span>E-mail:</span>
                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Digite seu E-MAIL' value={email} />
            </label>

           <label>
            <span>Bio:</span>
            <textarea name="texto" onChange={(e) => setTexto(e.target.value)}  value={texto}></textarea>
           </label>
            <input type="submit" value="Enviar" />
            

            <label>
                <span>Função no sistema</span>
                <select name="função" onChange={(e) => setFunção(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
        </form>
    </div>
  )
}

export default Myform