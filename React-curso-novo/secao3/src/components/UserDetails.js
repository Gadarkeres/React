

const UserDetails = ({nome, idade,}) => {

   
  return (
    <div>
        <h2>Informações pessoais:</h2>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        
        {idade >= 18 ? (<p>Você está habito para tirar sua habilitação!</p>): (<p>Você não pode tirar sua carteira. <strong>Motivo: Menor de idade</strong></p>)} 
         
    </div>

  )
}

export default UserDetails