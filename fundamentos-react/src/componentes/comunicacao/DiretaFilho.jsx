import React from "react";


function filho (props){
    return(
        <div>
            <span> {props.nome},</span>
            <span> <strong>{props.idade} anos</strong></span>
            <span> e {props.bool ?'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}
export default filho;