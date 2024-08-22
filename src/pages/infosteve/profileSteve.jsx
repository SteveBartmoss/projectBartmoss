import { Card, CardContent } from "../../componentes/card/card";
import { Chip } from "../../componentes/chips/chip";
import { DivCol, DivRow } from "../../componentes/contenedores/contenedores";


export function ProfileSteve() {
    return (
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
                                <p>Ui Steve</p>
                                <p>Sql Steve</p>
                                <p>mochaEditor</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <h1>Lenguajes usados</h1>
                            <CardContent>

                                <p>C</p>
                                <p>php</p>
                                <p>JavaScript</p>
                                <p>Java</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <h1>Mi perfil de ytMusic</h1>
                            <p>
                                No todo se trata de programar asi
                                que de debes en cuando me gusta
                                es
                            </p>
                        </Card>

                        <Card>
                            <h1>Mi perfil de steam</h1>
                            <p>
                                No seria un buen programador
                                si no me gustara pasar parte de mi
                                tiempo libre con los videojuegos
                            </p>
                        </Card>

                        <Card>
                            <h1>Stack de lenguajes</h1>
                            <p>
                                Dart
                            </p>
                            <p>
                                Go
                            </p>
                            <p>
                                Rust
                            </p>
                        </Card>

                        <Card>
                            <h1>Stack de tecnologias</h1>
                            <p>
                                Docker
                            </p>
                            <p>
                                Nest.js
                            </p>
                            <p>
                                Mongo db
                            </p>
                        </Card>

                        <Card>
                            <h1>Stack de proyectos</h1>
                            <p>
                                Desplegar una api
                            </p>
                            <p>
                                Completar la version 1 de la Ui
                            </p>
                        </Card>
                    </DivCol>
                </DivRow>
            </DivCol>
        </div>
    )
}
