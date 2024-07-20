import { useState } from "react";
import './tabs.css';
import { DivCol, DivRow } from "../contenedores/contenedores";

export function Tabs({ headers, elements }) {

    const [currentTab, setCurrentTab] = useState(1);

    const onTabChange = (id) => {
        //console.log('id',id)
        setCurrentTab(id)
        //console.log('tab', currentTab)
    }

    return (
        <DivCol>
            <DivRow>
                {
                    headers.map(head =>
                        <div key={head.title} className="header-tabs">
                            <p onClick={() => onTabChange(head.id)} className={currentTab === head.id ? 'tab tab-actibe' : 'tab'}>{head.title}</p>
                        </div>
                    )
                }
            </DivRow>
            <DivRow>
                {
                    headers.map(head =>
                        <div key={head.id} className={currentTab === head.id ? '' : 'tab-close'}>
                            {head.content}
                        </div>
                    )
                }
            </DivRow>
        </DivCol>
    )
}