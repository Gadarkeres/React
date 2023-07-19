import React from "react";
import DiretaFilho from './DiretaFilho'

function pai (){
    return(
        <div>
            <DiretaFilho nome = "Matheus" idade={22} bool={true}/>
            <DiretaFilho nome = "Sophia" idade={17} bool={false}/>
        </div>
    )
}  

export default pai;