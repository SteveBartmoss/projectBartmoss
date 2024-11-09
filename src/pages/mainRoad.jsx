import { DivSection, DivTopicos } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { Card, CardAccions, CardLink } from "../componentes/card/card";

export function MainRoad() {


    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"}
                title={"La guia del programador"}
                text={"Por Steve Bartmoss"} />

            <DivSection>
                <DivTopicos>
                    <Card>
                        <h1>JavaScript</h1>
                        <p>Guia para estudiar JavaScript</p>
                        <CardAccions>
                            <CardLink url="javascript" text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>
                </DivTopicos>
            </DivSection>
        </div>
    )
}