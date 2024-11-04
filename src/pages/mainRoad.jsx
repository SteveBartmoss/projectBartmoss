import { DivSection, DivTopicos } from "../componentes/contenedores/contenedores";


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
                            <CardLink url="JavaScript" text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>
                </DivTopicos>
            </DivSection>
        </div>
    )
}