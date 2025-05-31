import { useEffect, useState } from "react";
import { TimeItem } from "../../componentes/timeItem/timeItem";
import { Card } from "../../componentes/card/card";


export function SteveTimeLine() {

    const [dataTimeLine, setDataTimeLine] = useState(null)

    useEffect(() => {
        fetch('/data/timeLine.json')
            .then((response) => response.json())
            .then((jsonData) => setDataTimeLine(jsonData))
            .catch((error) => console.log('Error: ',error))
    },[])

    return (
        <div>
            {
                dataTimeLine && Array.isArray(dataTimeLine) ? (
                    dataTimeLine.map((item, index) =>
                        <TimeItem key={index} fecha={item.fecha} autor={item.autor} texto={item.texto} /> 
                    )
                ) : (
                    <p>Cargando infomacion ...</p>
                )
            }
        </div>
    )
}