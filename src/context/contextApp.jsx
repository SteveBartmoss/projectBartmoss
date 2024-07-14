import { createContext, useContext } from "react";

export const AppContex= createContext()

export const useApp=()=>{
    const context = useContext(AppContex)
    if(!context){
        throw new Error("useApp must be used within a AppContextProvider")
    }
    return context
}

export const AppContextProvider = ({children})=>{
    return(
        <AppContex.Provider>
            {children}
        </AppContex.Provider>
    )
}