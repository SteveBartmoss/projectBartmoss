import './Modal.css'

export function Modal({ children, estado, close, persistent=false }) {

    const handleOutsideClick=(e)=>{
        if(e.target.className === 'overlay' && persistent === false){
            close();
        }
    }

    return (
        <div className={estado ? 'overlay' : 'modal-close'} onClick={handleOutsideClick}>
            <div className="modal-content">
                {children}
            </div>
        </div>

    )

}