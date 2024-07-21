import { Card, CardAccions, CardLink, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivArticle, DivSection, DivTopicos } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";

export function Docu() {
    return (
        <div>
            <Portada imgPortada={"/Assets/steveBartmoss.jpg"}
                title={"La guia del internet"}
                text={"Por Steve Bartmoss"} />
            <DivSection>
                <DivTopicos>
                    <Card variant="card-outlined">
                        <CardTitle>Primeros Pasos React</CardTitle>
                        <CardText>
                            Tus primeros pasos en la libreria de
                            react pueden ser algo complejos, pero
                            aqui te contamos cosas que te pueden ayudar
                        </CardText>
                        <Chip color="warning">Java Script</Chip>
                        <CardAccions>
                            <CardLink url={'primerospasos'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>
                </DivTopicos>
            </DivSection>
        </div>
    )
}