import { createContext, useReducer } from "react";
 // criando Cordotitulocontext
export const CordotituloContext = createContext()
// titleColorReducer
export const titleColorReducer = (state, action) => {

        switch(action.type){
            case "RED":
            return {...state, color:"red" }
            case "BLUE":
                return{...state, color:"blue"}
            default:
                return state;
        }

}


//provider
export const CordotituloContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"})
    // useReducer (quem altera o estado, estado inical)
    console.log("Title color context:", state);

    return <CordotituloContext.Provider value={{...state, dispatch}}>{children} </CordotituloContext.Provider>;
}
