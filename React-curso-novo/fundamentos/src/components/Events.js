const Events = () => {

    const handleMyEvent = (e) =>{
        console.log(e);
        console.log ("Ativou o evento")
    }
 const renderSomething = (x) =>{
    if(x){
       return(
        <h1>Renderizei o x</h1>
       ) 
    }
    else{
        return(
             <h1>Renderizei o x false</h1>
        )
       
    }
 }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>

            <div>
                <button onClick={() => console.log("clicou!")}>Clique aqui também</button>
            </div>
            {renderSomething (false)}
        </div>
    )


}



export default Events