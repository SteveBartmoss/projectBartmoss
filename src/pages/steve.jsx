import { Card, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivArticle, DivCol, DivPanel, DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Tabs } from "../componentes/tabs/tabs";
import { TimeItem } from "../componentes/timeItem/timeItem";

export function Steve() {
    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Steve Bartmoss"} text={"No le preuntes a la documentacion, preguntame a mi"} />
            <DivSection>
                <Tabs position="position-center" headers={
                    [
                        {
                            id: 1,
                            title: "Info",
                            content:
                                <div>
                                    <Card>
                                        <CardTitle>Acerca de steve</CardTitle>
                                        <CardText>
                                            Programador web fan de los temas cyberpunk,
                                            sobre programacion, tecnologia y videojuegos.
                                            Con la idea de poder compartir con otas personas
                                            el conocimiento sobre programacion que posee
                                        </CardText>
                                    </Card>
                                    <DivCol>
                                        <DivRow>
                                            <DivCol>
                                                <Card>
                                                    <CardTitle>Skills</CardTitle>
                                                    <DivRow>
                                                        <Chip color={"principal"}>React</Chip>
                                                        <Chip color={"warning"}>JavaScript</Chip>
                                                        <Chip color={"success"}>Linux</Chip>
                                                    </DivRow>
                                                </Card>
                                                <Card>
                                                    <CardTitle>Stats</CardTitle>
                                                    <CardText></CardText>
                                                    <p>Horas de programacion: 960 </p>
                                                </Card>
                                                <Card>
                                                    <CardTitle>Manejador de Versiones</CardTitle>
                                                    <CardTitle>Editor Favorito</CardTitle>
                                                    <CardTitle>Distribucion usada</CardTitle>
                                                    <CardTitle>Lenguaje Favorito</CardTitle>
                                                </Card>
                                                <Card>
                                                    <CardTitle>Uso de Lenguajes</CardTitle>
                                                </Card>
                                            </DivCol>

                                            <DivCol>

                                                <Card>
                                                    <CardTitle>Proyectos Actuales</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Lenguajes usados</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Lenguajes usados</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Mi perfil de spotyfi</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Mi perfil de steam</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Stack de lenguajes</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Stack de tecnologias</CardTitle>
                                                </Card>

                                                <Card>
                                                    <CardTitle>Stack de proyectos</CardTitle>
                                                </Card>

                                            </DivCol>
                                        </DivRow>
                                    </DivCol>
                                </div>
                        },
                        {
                            id: 2,
                            title: "Time Line",
                            content:
                                <div>
                                    <TimeItem fecha="03/08/2024" autor="Steve" 
                                        texto="Wow ya mas de la mitad del 2024, 
                                        que rapido pasa el tiempo cuando te va mal XD, 
                                        el invierno se acerca" />

                                    <TimeItem
                                        fecha="28/07/2024" autor="Steve"
                                        texto="Bueno manetener el sofware no es tan malo, en 
                                        algun momento esto tiene que funcionar no?" />
                                </div>,
                        },
                        {
                            id: 3,
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