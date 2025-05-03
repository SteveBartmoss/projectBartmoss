import { NavLink } from 'react-router-dom';
import './card.css';
import { useApp } from '../../context/contextApp';

export function Card({children,variant='',minSize=0}){

    const {isDarkTheme} = useApp()

    return(
        <div style={{minWidth: `${minSize}rem`}} className={`card-basic ${variant} ${isDarkTheme ? 'ligth' : 'dark'}`   }>
            {children}
        </div>
    )
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