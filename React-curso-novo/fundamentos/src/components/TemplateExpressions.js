const TemplateExpressions = () =>{
    const name = "Matheus Rafael"
   const data = {
    age: 31,
    job: 'Programmer',
   } 
    return(
        <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job} e tem idade de {data.age} anos</p>
        </div>
    )

}

export default TemplateExpressions