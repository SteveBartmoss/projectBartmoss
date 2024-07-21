import { Card, CardAccions, CardLink, CardText, CardTitle } from "../componentes/card/card";
import { DivSection } from "../componentes/contenedores/contenedores";

export function Docu() {
    return (
        <div>
            <DivSection>
                <Card variant="card-outlined">
                    <CardTitle>Primeros Pasos React</CardTitle>
                    <CardText>
                        Tus primeros pasos en la libreria de 
                        react pueden ser algo complejos, pero 
                        aqui te contamos cosas que te pueden ayudar
                    </CardText>
                    <CardAccions>
                        <CardLink url={''} text={'Ir al articulo'} />
                    </CardAccions>
                </Card>
            </DivSection>
        </div>
    )
}