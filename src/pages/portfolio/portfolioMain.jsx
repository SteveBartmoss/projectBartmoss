import { Card, CardAccions, CardLink } from "../../componentes/card/card";
import { DivSection, DivTopicos } from "../../componentes/contenedores/contenedores";



export function PortFolio() {
    return (
        <DivSection>
            <Card>
                <h1>Portfolio</h1>

                <p>
                    Puedes ver los proyectos web o de programacion
                    que tengo en progreso y quizas encuentras
                    algo que te interesa
                </p>
            </Card>
            
            <DivTopicos>
                <Card>
                    <h1>CronosJs</h1>

                    <p>Libreria para trabajar con fechas</p>

                    <CardAccions>
                        <CardLink url={'cronosjs'} text={'Ver'}/>
                    </CardAccions>
                </Card>
            </DivTopicos>
        </DivSection>

    )
}