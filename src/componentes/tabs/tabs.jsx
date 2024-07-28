import { useState } from "react";
import './tabs.css';
import { DivCol, DivRow } from "../contenedores/contenedores";

export function Tabs({ headers, elements, position="" }) {

    const [currentTab, setCurrentTab] = useState(1);

    const onTabChange = (id) => {
        setCurrentTab(id)
    }

    return (
        <DivCol>
            <div className={`container-head ${position}`}>
                {
                    headers.map(head =>
                        <div key={head.title} className="header-tabs">
                            <p onClick={() => onTabChange(head.id)} className={currentTab === head.id ? 'tab tab-actibe' : 'tab'}>{head.title}</p>
                        </div>
                    )
                }
            </div>
            <DivRow>
                {
                    headers.map(head =>
                        <div key={head.id} className={currentTab === head.id ? 'container-content' : 'tab-close'}>
                            {head.content}
                        </div>
                    )
                }
            </DivRow>
        </DivCol>
    )
}