import { useState } from 'react';
import './TreeMapChild.css';

export function TreeMapChids({ data }) {

    const jumpToSection = (id) => {
        const section = document.getElementById(id)
        section.scrollIntoView({ behavior: "smooth" });
    }

    const [close, setClose] = useState(false)

    const onChangeClose = () => {
        setClose(!close)
    }

    return (
        <>
            <div>
                <h3 onClick={() => onChangeClose()}>{data.section}</h3>
            </div>
            <div className={close ? 'close-childs' : 'open-childs'}>
                {
                    data.childs.map(child =>
                        <p key={child.id} onClick={() => jumpToSection(child.id)}>{child.titulo}</p>
                    )
                }
            </div>
        </>
    )
}