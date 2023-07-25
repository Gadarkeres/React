const Challenge = () =>{
    const a = 25;
    const b = 20;
    
   const HandleSoma = () =>{
    console.log(a + b)
   } 

return(
    <div>
        <p>os numeros são: {a} e {b}</p>
        <button onClick={HandleSoma}>Somar!</button>
    </div>
    
)
}

export default Challenge;