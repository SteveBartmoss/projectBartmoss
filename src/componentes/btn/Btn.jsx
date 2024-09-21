import './Btn.css'


export function Btn({children,variant,color='principal',evento}){
    return(
        <button onClick={evento} className={`btn-basic ${variant} ${color}`} >{children}</button>
    )
}