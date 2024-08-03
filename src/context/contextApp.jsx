import { createContext, useContext, useState } from "react";

export const AppContex= createContext()

export const useApp=()=>{
    const context = useContext(AppContex)
    if(!context){
        throw new Error("useApp must be used within a AppContextProvider")
    }
    return context
}

export const AppContextProvider = ({children})=>{

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme((prevTheme)=>!prevTheme)
    }

    const elements ={
        isDarkTheme,
        toggleTheme,
    }

    return(
        <AppContex.Provider value={elements}>
            {children}
        </AppContex.Provider>
    )
}