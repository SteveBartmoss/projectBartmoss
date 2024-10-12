import { useApp } from '../../context/contextApp';
import { Switch } from '../switch/switch';
import { ThemeBtn } from '../themeBtn/themeBtn';
import './navBar.css'
import { NavLink } from "react-router-dom";


export function NavBar() {

    const {isDarkTheme} = useApp()

    return (
        <div className="div-nav-bar">
            <div>
                <NavLink className= {isDarkTheme ? 'nav-item-light' : 'nav-item-dark'} to={"/"}>Void return</NavLink>
            </div>
            <div>
                <ThemeBtn />
                <NavLink className= {isDarkTheme ? 'nav-item-light' : 'nav-item-dark'} to={"docu"}>Docu</NavLink>
                <NavLink className= {isDarkTheme ? 'nav-item-light' : 'nav-item-dark'} to={"steve"}>Steve</NavLink>
            </div>
        </div>
    )
}