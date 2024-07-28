import './timeItem.css';

export function TimeItem({ fecha, texto }) {
    return (
        <div>
            <div className='head-time-item'>
                <div>
                    <img className='img-time-item' src="/Assets/steveA.png" />
                </div>
                <div>
                    <p>{fecha}</p>
                </div>
                
            </div>
            <div>
                <p>{texto}</p>
            </div>
        </div>
    )
}