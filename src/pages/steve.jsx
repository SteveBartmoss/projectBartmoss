import { DivCol, DivRow, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function Steve(){
    return(
        <div>
            <Portada />
            <DivSection>
                <h1>Conetnido del perfil</h1>
                <DivCol>
                    <DivRow>
                        <DivCol>
                            <h1>Section de informacion</h1>
                        </DivCol>
                        <DivCol>
                            <h1>Section de marcadores</h1>
                        </DivCol>
                    </DivRow>
                </DivCol>
            </DivSection>
        </div>
    )
}