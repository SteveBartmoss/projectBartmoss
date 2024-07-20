import { DivCol, DivRow, DivSection } from "../componentes/contenedores/contenedores";
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
                                                <h1>Section de informacion</h1>
                                            </DivCol>
                                            <DivCol>
                                                <h1>Section de marcadores</h1>
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