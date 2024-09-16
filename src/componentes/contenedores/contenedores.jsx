import { useApp } from '../../context/contextApp';
import './contenedores.css';

export function DivMain({children}){

    const {isDarkTheme} = useApp();

    return(
        <div className={isDarkTheme ? 'div-main-light' : 'div-main-dark' }>
            {children}
        </div>
    )
}

export function DivRow({children}){
    return(
        <div className="div-row">
            {children}
        </div>
    )
}

export function DivGrow({children}){
    return(
        <div className="div-grow">
            {children}
        </div>
    )
}

export function DivCol({children}){
    return(
        <div className="div-col">
            {children}
        </div>
    )
}

export function DivSection({children}){
    return(
        <div className="div-section">
            {children}
        </div>
    )
}

export function DivPanel({children}){
    return(
        <div className="div-panel">
            {children}
        </div>
    )
}

export function DivArticle({children}){
    return(
        <div className="div-article">
            {children}
        </div>
    )
}

export function DivTopicos({children}){
    return(
        <div className="div-topicos">
            {children}
        </div>
    )
}