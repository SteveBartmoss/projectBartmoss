import { useApp } from '../../context/contextApp';
import { ThemeBtn } from '../themeBtn/themeBtn';
import './navBar.css'
import { NavLink } from "react-router-dom";


export function NavBar() {

    const {isDarkTheme, toggleTheme} = useApp()

    return (
        <div className="div-nav-bar">
            <div>
                <NavLink className="nav-item" to={"/"}>Void return</NavLink>
            </div>
            <div>
                <ThemeBtn estado={isDarkTheme} accion={toggleTheme} />
                <NavLink className="nav-item" to={"docu"}>Docu</NavLink>
                <NavLink className="nav-item" to={"steve"}>Steve</NavLink>
            </div>
        </div>
    )
}