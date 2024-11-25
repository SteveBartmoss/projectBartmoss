

export function CodeSpace({title,rawCode}){
    return(
        <div>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p>
                    {rawCode}
                </p>
            </div>
        </div>
    )
}