

export function ThemeBtn({estado,accion}){

    return(
        <button onClick={accion}>{estado ? 'On' : 'off'}</button>
    )
}