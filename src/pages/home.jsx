import { useEffect, useState } from "react";
import { DivGrow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { PostCard, PostCardAccions, PostCardLink } from "../componentes/postCard/postCard";

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

                <h1>Ultimos Articulos</h1>

                <DivGrow>
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
                </DivGrow>

                <h1>Ultimos post</h1>
                <DivGrow>
                    {
                        dataPost && Array.isArray(dataPost) ? (
                            dataPost.map(item =>
                                <PostCard key={item.titulo}>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                    <PostCardAccions>
                                        <PostCardLink url={`steve/${item.url}`} text={'Ir al articulo'} />
                                    </PostCardAccions>
                                </PostCard>
                            )
                        ) : (
                            <p>Caragando informacion ...</p>
                        )
                    }
                </DivGrow>

            </DivSection>
        </div>
    )
}