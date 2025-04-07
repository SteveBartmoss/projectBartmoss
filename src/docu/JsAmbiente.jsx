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
                            <h1>Preparar ambiente de desarollo para Js</h1>

                            <p>
                                Cuando se empieza a desarrollar aplicaciones web con javascript 
                                es importante preparar la pila de tecnologias para trabajar con 
                                este lenguaje, en este post veremos como preparar la pila de tecnoliga 
                                para desarrollar en java script
                            </p>

                            <h2>Entorno de ejecucion</h2>

                            
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}