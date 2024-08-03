import { useApp } from "../../context/contextApp"
import './themeBtn.css'

export function ThemeBtn(){

    const {isDarkTheme, toggleTheme} = useApp()

    return(
        <button className="btn-theme" onClick={toggleTheme}>{isDarkTheme ? 'on' : 'off'}</button>
    )
}