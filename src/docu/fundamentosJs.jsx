import { CodeSpaceV2 } from "../componentes/codeSpace/CodeSpaceV2"
import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function FundamentosJs(){

    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Fundamentos de Js"} text={"Por Steve 15/04/2025"} />

            <DivRow>
                <DivCol>

                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>

                            <h1>Arrow Functions (Funciones Flecha)</h1>

                            <h2>Sintaxis Basica</h2>

                            <p>
                                Las arrow functions son una forma mas corta de escribir funciones en JavaScript.
                            </p>

                            <CodeSpaceV2 title={"Funcion tradicional"} rawCode={`function suma(a, b) {\n return a + b;\n}`} />

                            <CodeSpaceV2 title={"Arrow function equivalente"} rawCode={`const suma = (a, b) => {\nreturn a + b;\n};`} />

                            <p>
                                Si el cuerpo es una sola lineam, se puede omitir {} y el return
                            </p>

                            <CodeSpaceV2 title={"Sin simbolos"} rawCode={`const suma = (a, b) => a + b;`} />

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )

}