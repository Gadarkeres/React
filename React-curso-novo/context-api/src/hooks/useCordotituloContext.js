import { useContext } from "react";
import { CordotituloContext } from "../context/CordotituloContext";

export const useCordotituloContext = () =>{
    const context = useContext(CordotituloContext)

    if(!context){
        console.log('Context não encontrado!')
    } 
    return context;
}