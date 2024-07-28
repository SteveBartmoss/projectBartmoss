import './timeItem.css';

export function TimeItem({ fecha, texto, autor }) {
    return (
        <div className='div-time-item'>
            <div className='head-time-item'>
                <div>
                    <img className='img-time-item' src="/Assets/steveA.png" />
                </div>
                <div className='div-date-item'>
                    <h1>{autor}</h1>
                    <p>{fecha}</p>
                </div>
            </div>
            <div className='div-text-item'>
                <p>{texto}</p>
            </div>
        </div>
    )
}