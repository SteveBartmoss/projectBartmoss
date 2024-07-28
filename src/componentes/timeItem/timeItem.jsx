import './timeItem.css';

export function TimeItem({ fecha, texto, autor }) {
    return (
        <div className='div-time-item'>
            <div className='head-time-item'>
                <div>
                    <img className='img-time-item' src="/Assets/steveA.png" />
                </div>
                <div className='div-date-item'>
                    <p>{autor}</p>
                    <p>{fecha}</p>
                </div>
            </div>
            <div>
                <p>{texto}</p>
            </div>
        </div>
    )
}