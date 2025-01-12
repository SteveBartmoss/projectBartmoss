import { useState } from "react";
import './ExtendPanel.css'

export function ExtendPanel({ children, title, size=0 }) {

    const [collapse,setCollapse]=useState(false)

    const onChangeCollapse=()=>{
        setCollapse(!collapse)
    }

    return (
        <div style={{minWidth: `${size}rem`}} className="extend-panel">
            <div className="extend-head" onClick={()=>onChangeCollapse()}>
                <div className="extend-title">{title}</div>
                <img alt="flecha" className={collapse ? 'down-icon' : 'up-icon'} src="/Assets/expand.svg" />
            </div>
            <div className={collapse ? 'extend-content' : 'close-content'}>
                {children}
            </div>
        </div>
    );
}