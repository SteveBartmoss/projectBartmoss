import { Card, CardAccions, CardLink, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivSection, DivTopicos } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { useApp } from "../context/contextApp";

export function Docu() {

    const { isDarkTheme } = useApp()

    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"}
                title={"La guia del internet"}
                text={"Por Steve Bartmoss"} />
            <DivSection>
                <DivTopicos>
                    <Card>
                        <h1>Primeros Pasos React</h1>
                        <p> Tus primeros pasos en la libreria de
                            react pueden ser algo complejos, pero
                            aqui te contamos cosas que te pueden ayudar
                        </p>
                        <Chip color="warning">Java Script</Chip>
                        <CardAccions>
                            <CardLink url={'primerospasos'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>El hookContext</h1>
                        <p>
                            El hook context puede ser confuso
                            pero ahora si lo entenderas
                        </p>
                        <Chip color="warning">Java Script</Chip>
                        <CardAccions>
                            <CardLink url={'hookcontext'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>Llaves foraneas y velocidad</h1>
                        <p>
                            La informacion que siempre quisistes saber
                            sobre las llaves foraneas
                        </p>
                        <Chip>Sql</Chip>
                        <CardAccions>
                            <CardLink url={'fkvelocidad'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>Prety commits</h1>
                        <p>
                            Una forma de hacer mas efientes 
                            los commits para los demas
                        </p>
                        <Chip>Git</Chip>
                        <CardAccions>
                            <CardLink url={'pretycommits'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>Que es composer</h1>
                        <p>
                            Uno de los programas inconicos 
                            cuando se maneja una pila de tecnologias 
                            de php
                        </p>
                        <Chip>php</Chip>
                        <CardAccions>
                            <CardLink url={'compositor'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>Mejorar debian</h1>
                        <p>
                            Cuando terminas de instalar debian no 
                            siempre esta todo listo
                        </p>
                        <Chip>linux</Chip>
                        <CardAccions>
                            <CardLink url={'mejorardebian'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>Empezar con Docker</h1>
                        <p>
                            Docker es una buena herramienta 
                            si eres desarrollador o encargado de 
                            despliegues de aplicacion
                        </p>
                        <Chip>Docker</Chip>
                        <CardAccions>
                            <CardLink url={'basicDocker'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                </DivTopicos>
            </DivSection>
        </div>
    )
}
