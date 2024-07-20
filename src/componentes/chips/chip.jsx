import './chip.css';

export function Chip({children, color="principal"}){
    return(
        <div className={`chip-${color}`}>
            <span className="chip">{children}</span>
        </div>
    )
}