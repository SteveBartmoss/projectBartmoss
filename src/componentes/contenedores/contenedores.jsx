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
        <div>
            {children}
        </div>
    )
}