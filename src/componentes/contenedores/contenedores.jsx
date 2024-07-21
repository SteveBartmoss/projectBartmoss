import './contenedores.css';

export function DivMain({children}){
    return(
        <div className="div-main">
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