import { Card, CardAccions, CardLink, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivSection, DivTopicos } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { useApp } from "../context/contextApp";

export function Docu() {

    const {isDarkTheme} = useApp()

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
                </DivTopicos>
            </DivSection>
        </div>
    )
}