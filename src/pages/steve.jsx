import { Card, CardContent, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivCol, DivRow, DivSection } from "../componentes/contenedores/contenedores";
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
                                        <h1>Acerca de steve</h1>
                                        <p>
                                            Programador web fan de los temas cyberpunk,
                                            sobre programacion, tecnologia y videojuegos.
                                            Con la idea de poder compartir con otas personas
                                            el conocimiento sobre programacion que posee
                                        </p>
                                    </Card>
                                    <DivCol>
                                        <DivRow>
                                            <DivCol>
                                                <Card>
                                                    <h1>Skills</h1>
                                                    <DivRow>
                                                        <Chip color={"principal"}>React</Chip>
                                                        <Chip color={"warning"}>JavaScript</Chip>
                                                        <Chip color={"success"}>Linux</Chip>
                                                    </DivRow>
                                                </Card>
                                                <Card>
                                                    <h1>Stats</h1>
                                                    <p>Horas de programacion: 960 </p>
                                                </Card>
                                                <Card>
                                                    <h1>Manejador de Versiones</h1>
                                                    <h1>Editor Favorito</h1>
                                                    <h1>Distribucion usada</h1>
                                                    <h1>Lenguaje Favorito</h1>
                                                </Card>
                                                <Card>
                                                    <h1>Uso de Lenguajes</h1>
                                                </Card>
                                            </DivCol>

                                            <DivCol>

                                                <Card>
                                                    <h1>Proyectos Actuales</h1>
                                                    <CardContent>
                                                        <p>UiSteve</p>
                                                        <p>sqlSteve</p>
                                                        <p>Darrow</p>
                                                    </CardContent>
                                                </Card>

                                                <Card>
                                                    <h1>Lenguajes usados</h1>
                                                </Card>

                                                <Card>
                                                    <h1>Mi perfil de spotyfi</h1>
                                                </Card>

                                                <Card>
                                                    <h1>Mi perfil de steam</h1>
                                                </Card>

                                                <Card>
                                                    <h1>Stack de lenguajes</h1>
                                                </Card>

                                                <Card>
                                                    <h1>Stack de tecnologias</h1>
                                                </Card>

                                                <Card>
                                                    <h1>Stack de proyectos</h1>
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