import { useEffect, useState } from "react";
import { DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Card } from "../componentes/card/card";

export function Home() {

    const [dataDocu, setDataDocu] = useState(null)
    const [dataPost, setDataPost] = useState(null)

    useEffect(() => {

        fetch('/data/docuArticles.json')
            .then((response) => response.json())
            .then((jsonData) => setDataDocu(jsonData))
            .catch((error) => console.log('Error: ', error))

        console.log(dataDocu)

        fetch('/data/stevePost.json')
            .then((response) => response.json())
            .then((jsonData) => setDataPost(jsonData))
            .catch((error) => console.log('Error: ',error))

    }, [])

    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Void Return"}
                text={"Blog dedicado a contar la vida de un programador y algunas otras cosas interesates"} />
            <DivSection>
                <h1>Ultimos Articulos</h1>
                <p>
                    Lista de articulos XD
                </p>
                <DivRow>
                    {
                        dataDocu && Array.isArray(dataDocu) ? (
                            dataDocu.map(item =>
                                <Card>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                </Card>
                            )
                        ) : (
                            <p>Cargando informacion ...</p>
                        )
                    }
                </DivRow>
                <DivRow>
                    {
                        dataPost && Array.isArray(dataPost) ? (
                            dataPost.map(item => 
                                <Card>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                </Card>
                            )
                        ) : (
                            <p>Caragando informacion ...</p>
                        )
                    }
                </DivRow>
            </DivSection>
        </div>
    )
}