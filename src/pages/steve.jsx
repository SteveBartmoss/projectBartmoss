import { Card } from "../componentes/card/card";
import { DivCol, DivPanel, DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Tabs } from "../componentes/tabs/tabs";


export function Steve() {
    return (
        <div>
            <Portada />
            <DivSection>
            <Tabs position="position-center" headers={
                        [
                            {
                                id: 0,
                                title: "Info",
                                content:
                                    <div>
                                        <h1>Acerca de steve</h1>
                                        <p>
                                            Programador web fan de los temas cyberpunk
                                            sobre prgramacion, tecnologia y videojuegos.
                                            Con la idea de poder compartir con otas personas
                                            el conocimiento sobre programacion que posee
                                        </p>
                                        <DivCol>
                                            <DivRow>
                                                <DivCol>
                                                    <div>
                                                        <h1>Skills</h1>
                                                        <p>React</p>
                                                        <p>JavaScript</p>
                                                        <p>Linux</p>
                                                    </div>
                                                    <div>
                                                        <p>Horas de programacion:</p>
                                                    </div>
                                                    <div>
                                                        <h1>Manejador de Versiones</h1>
                                                        <h1>Editor Favorito</h1>
                                                        <h1>Distribucion usada</h1>
                                                        <h1>Lenguaje Favorito</h1>
                                                    </div>
                                                    <div>
                                                        <h1>Lenguajes Usados</h1>
                                                    </div>
                                                </DivCol>
                                                <DivCol>
                                                    <h1>Section de marcadores</h1>
                                                    <Card>
                                                        Lenguajes usados
                                                    </Card>
                                                </DivCol>
                                            </DivRow>
                                        </DivCol>
                                    </div>
                            },
                            {
                                id: 1,
                                title: "Time Line",
                                content:
                                    <div>
                                        <h1>Info Time line</h1>
                                    </div>,
                            },
                            {
                                id: 2,
                                title: "Post",
                                content:
                                    <div>
                                        <h1>Info post</h1>
                                    </div>,
                            }
                        ]

                    } />
            </DivSection>
        </div>
    )
}