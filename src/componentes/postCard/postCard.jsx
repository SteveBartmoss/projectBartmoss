import { NavLink } from "react-router-dom";
import { useApp } from "../../context/contextApp"
import './postCard.css';

export function PostCard({children}){

    const {isDarkTheme} = useApp()

    return(
        <div className={`post-card ${isDarkTheme ? 'ligth' : 'dark'}`}>
            {children}
        </div>
    )
}

export function PostCardLink({ url, text, isBlank=false }) {
    return isBlank ? (
        <a className="post-card-link" rel="noopener noreferrer" target="_blank" href={url}>{text}</a> 
    ) : (
        <NavLink className="post-card-link" to={url}>{text}</NavLink>
    )
}

export function PostCardAccions({ children }) {
    return (
        <div className="post-card-actions">
            {children}
        </div>
    );
}

export function PostCardContent({children}){
    return(
        <div className="post-card-content">
            {children}
        </div>
    );
}