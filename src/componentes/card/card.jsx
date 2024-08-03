import { NavLink } from 'react-router-dom';
import './card.css';
import { useApp } from '../../context/contextApp';

export function Card({children,variant}){

    const {isDarkTheme} = useApp()

    return(
        <div className={variant ? variant : isDarkTheme ? 'card-basic-ligth' : 'card-basic-dark'}>
            {children}
        </div>
    )
}

export function CardTitle({ children }) {
    return (
        <div className="card-title">
            {children}
        </div>
    );
}

export function CardText({ children }) {
    return (
        <div className="card-text">
            {children}
        </div>
    );
}

export function CardLink({ url, text, isBlank=false }) {
    return isBlank ? (
        <a className="card-link" rel="noopener noreferrer" target="_blank" href={url}>{text}</a> 
    ) : (
        <NavLink className="card-link" to={url}>{text}</NavLink>
    )
}

export function CardAccions({ children }) {
    return (
        <div className="card-actions">
            {children}
        </div>
    );
}

export function CardContent({children}){
    return(
        <div className="card-content">
            {children}
        </div>
    );
}