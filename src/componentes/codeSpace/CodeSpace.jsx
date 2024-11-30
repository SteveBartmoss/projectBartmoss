import './CodeSpace.css';

export function CodeSpace({title,rawCode}){
    return(
        <div>
            <div className="code-space-title">
                <h1>{title}</h1>
            </div>
            <div className="code-space">
                <p>
                    {rawCode}
                </p>
            </div>
        </div>
    )
}