import { useState } from "react"

export function Switch(){

    const [activate,setActivate] = useState(false)
    const [rangeValue, setRangeValue] = useState(0)

    const handleRangeChange=(event)=>{
        setRangeValue(event.target.value)
        event.target.value == 0 ? setActivate(false) : setActivate(true)
    }

    return(
        <div>
            <input className="toogle" type="range" min="0" max="1" value={rangeValue} onChange={handleRangeChange} />
        </div>
    )
}