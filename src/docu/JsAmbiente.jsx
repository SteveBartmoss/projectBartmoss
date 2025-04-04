import { Portada } from "../componentes/portada/portada"
import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores"

export function JsAmbiente(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Ambiente de desarrollo para js"} text={"Por Steve 04/04/2025"} />

            <DivRow>

                <DivCol>
                    <DivArticle>
                        <DivContent>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}