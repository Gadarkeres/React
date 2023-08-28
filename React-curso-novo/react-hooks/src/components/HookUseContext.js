import { createContext, useState} from "react";

export const algumcontext = createContext()

export const HookUseContext = ({children}) => {
    const [menuisvisible, setMenuisvisible] = useState(true)
    return(
        <algumcontext.Provider value = {{menuisvisible, setMenuisvisible}}>
            {children}
        </algumcontext.Provider>
    )
}