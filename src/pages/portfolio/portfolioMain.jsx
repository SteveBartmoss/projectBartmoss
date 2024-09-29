import { Card } from "../../componentes/card/card";
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

            </DivTopicos>
        </DivSection>

    )
}