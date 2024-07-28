

export function TimeItem({fecha,texto}){
    return(
        <div>
            <div>
                <img src="/Assets/steveA.png" />
                <p>{fecha}</p>
            </div>
            <div>
                <p>{texto}</p>
            </div>
        </div>
    )
}