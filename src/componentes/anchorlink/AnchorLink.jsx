import { NavLink } from "react-router-dom";

export function AnchorLink({url,text,isBlank=false}){
    return isBlank ? (
        <a className="anchor-link" rel="noopener noreferrer" target="_blank" href={url}>{text}</a>
    ) : (
        <NavLink className="anchor-link" to={url}>{text}</NavLink>
    )
}