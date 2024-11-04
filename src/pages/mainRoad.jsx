import { DivSection, DivTopicos } from "../componentes/contenedores/contenedores";


export function MainRoad(){


    return(
        <div>
            <Portada imgPortada={"/Assets/steveA.png"}
                title={"La guia del propgramador"}
                text={"Por Steve Bartmoss"} />

            <DivSection>
                <DivTopicos>
                    
                </DivTopicos>
            </DivSection>
        </div>
    )
}