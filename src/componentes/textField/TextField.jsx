import { useState } from "react";
import './componentes.css';

export function TextField({label,isPass}) {

    const [text,setText] = useState("")

    const handleChange=(event)=>{
        setText(event.target.value)
    }

    return (
        <>
            <div className="form">
                <input type={isPass ? 'password' : 'text'} id="prueba" value={text} onChange={handleChange} className="text-field" placeholder='' />
                <label htmlFor="field" className="text-field-label">{label}</label>
            </div>
        </>
    );
}