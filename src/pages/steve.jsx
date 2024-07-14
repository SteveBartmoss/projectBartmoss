import { DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function Steve(){
    return(
        <div>
            <Portada />
            <DivSection>
                <h1>Conetnido del perfil</h1>
            </DivSection>
        </div>
    )
}