import { useEffect, useState } from "react";
import { DivGrow, DivRow, DivSection, DivTopicos, PostCard } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Card, CardAccions, CardLink } from "../componentes/card/card";
import { PostCardAccions, PostCardLink } from "../componentes/postCard/postCard";

export function Home() {

    const [dataDocu, setDataDocu] = useState(null)
    const [dataPost, setDataPost] = useState(null)

    useEffect(() => {

        fetch('/data/docuArticles.json')
            .then((response) => response.json())
            .then((jsonData) => setDataDocu(jsonData))
            .catch((error) => console.log('Error: ', error))

        fetch('/data/stevePost.json')
            .then((response) => response.json())
            .then((jsonData) => setDataPost(jsonData))
            .catch((error) => console.log('Error: ', error))

    }, [])

    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Void Return"}
                text={"Blog dedicado a contar la vida de un programador y algunas otras cosas interesates"} />
            <DivSection>
                <h1>Prueba</h1>
                <DivTopicos>
                    {
                        dataDocu && Array.isArray(dataDocu) ? (
                            dataDocu.map(item => 
                                <PostCard key={item.titulo}>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                    <PostCardAccions>
                                        <PostCardLink url={`docu/${item.url}`} text={'Ir al acticulo'} />
                                    </PostCardAccions>
                                </PostCard>
                            )
                        ) : (
                            <p>Cargando informacion ...</p>
                        )
                    }
                </DivTopicos>
                <h1>Ultimos Articulos</h1>
                <DivTopicos>
                    {
                        dataDocu && Array.isArray(dataDocu) ? (
                            dataDocu.map(item =>
                                <Card size={30} key={item.titulo}>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                    <CardAccions>
                                        <CardLink url={`docu/${item.url}`} text={'Ir al articulo'} />
                                    </CardAccions>
                                </Card>
                            )
                        ) : (
                            <p>Cargando informacion ...</p>
                        )
                    }
                </DivTopicos>

                <h1>Ultimos post</h1>
                <DivTopicos>
                    {
                        dataPost && Array.isArray(dataPost) ? (
                            dataPost.map(item =>
                                <Card key={item.titulo}>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                    <CardAccions>
                                        <CardLink url={`steve/${item.url}`} text={'Ir al articulo'} />
                                    </CardAccions>
                                </Card>
                            )
                        ) : (
                            <p>Caragando informacion ...</p>
                        )
                    }
                </DivTopicos>

            </DivSection>
        </div>
    )
}