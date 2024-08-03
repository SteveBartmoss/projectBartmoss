import { useApp } from "../../context/contextApp"


export function ThemeBtn(){

    const {isDarkTheme, toggleTheme} = useApp()

    return(
        <button onClick={toggleTheme}>{isDarkTheme ? 'on' : 'off'}</button>
    )
}