import { useEffect, useState } from "react";
import { Card, CardAccions, CardLink } from "../../componentes/card/card";
import { DivSection } from "../../componentes/contenedores/contenedores";


export function PostSteve() {

    const [dataPost, setDataPost] = useState(null)

    useEffect(() => {
        fetch('/data/stevePost.json')
            .then((response) => response.json())
            .then((jsonData) => setDataPost(jsonData))
            .catch((error) => console.log('Error: ', error))
    }, [])

    return (
        <>

            <DivSection>
                {
                    dataPost && Array.isArray(dataPost) ? (

                        dataPost.map(item =>
                            <Card size={30} key={item.titulo}>
                                <h1>{item.titulo}</h1>
                                <p>{item.descripcion}</p>
                                <CardAccions>
                                    <CardLink url={item.url} text={'Ir al articulo'} />
                                </CardAccions>
                            </Card>
                        )
                    ) : (
                        <p>Cargando informacion ... </p>
                    )
                }
            </DivSection>
        </>
    )
}