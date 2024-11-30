import { NavLink } from "react-router-dom";
import './AnchorLink.css';
import { useApp } from "../../context/contextApp";

export function AnchorLink({url,text,isBlank=false}){

    const {isDarkTheme} = useApp()

    return isBlank ? (
        <a className={isDarkTheme ? 'anchor-link-ligth' : 'anchor-link-dark' } rel="noopener noreferrer" target="_blank" href={url}>{text}</a>
    ) : (
        <NavLink className="anchor-link" to={url}>{text}</NavLink>
    )
}