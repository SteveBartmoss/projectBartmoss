import { useApp } from "../../context/contextApp"
import './themeBtn.css'

export function ThemeBtn(){

    const {isDarkTheme, toggleTheme} = useApp()

    return(
        <button className={isDarkTheme ? 'btn-theme-ligth' : 'btn-theme-dark'} onClick={toggleTheme}>{isDarkTheme ? 'on' : 'off'}</button>
    )
}