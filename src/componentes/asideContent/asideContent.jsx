import './asideContent.css';

export function AsideContent() {
    return (
        <div className='div-aside'>
            <h1>Post escritos por humanos</h1>
            <p>Este post no apoya la teoria del internet muerto</p>
            <p>Ultima actualizacion</p>
            <p>Compartir</p>
            <h1>Tambien te puede interesar</h1>

            <div>
                <div>
                    <h2>Pila sin fin</h2>
                    <p>info Pila</p>
                    <a href='docu'>ir al post</a>
                </div>

                <div>
                    <h2>Pila sin fin</h2>
                    <p>info Pila</p>
                    <a href='docu'>ir al post</a>
                </div>

                <div>
                    <h2>Pila sin fin</h2>
                    <p>info Pila</p>
                    <a href='docu'>ir al post</a>
                </div>

            </div>
        </div>
    )
}