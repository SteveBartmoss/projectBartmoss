import { DivArticle, DivCol, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function MariaInstall(){


    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Instalar mariaDB en ubuntu"} text={"Por Steve 29/05/2024"} />

            <DivRow>
                <DivCol>

                </DivCol>

                <DivCol>
                    <DivArticle>
                        
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}