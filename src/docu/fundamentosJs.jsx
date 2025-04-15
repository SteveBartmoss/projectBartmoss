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

                            <h2>Parentesis en los Parametros</h2>

                            <p>
                                Un parametro: Los parentesis son opcionales.
                            </p>

                            <CodeSpaceV2 title={"Un solo parametro"} rawCode={`const cuadrado = x => x * x;`} />

                            <p>
                                Sin parametros: Se usan parentesis vacios.
                            </p>

                            <CodeSpaceV2 title={"Sin parametros"} rawCode={`const saludo = () => "Hola Mundo";`} />

                            <p>
                                Varios parametros: Requiren parentesis.
                            </p>

                            <CodeSpaceV2 title={"Varios parametros"} rawCode={`const resta = (a,b) => a - b:`} />

                            <h2>Uso comun en react</h2>

                            <p>
                                En react, las arrow functions se usan mucho para:
                            </p>

                            <CodeSpaceV2 title={`Manejo de eventos`} rawCode={`<button onClick={() => console.log("Click")}>Presiona</button>`} />

                            <CodeSpaceV2 title={'Componentes funcionales'} rawCode={`const MiComponente = () => <h1>Hola React</h1>;`} />

                            <CodeSpaceV2 title={'Funciones dentro de hooks'} rawCode={`useEffect(() => {\nfetchData();\n }, []);`} />

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )

}