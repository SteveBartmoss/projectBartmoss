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

                            <h3>Sintaxis</h3>

                            <p>
                                Las arrow funcion son mas cortas el usar la sintaxis: () => {} a 
                                diferencia de las funciones tradicionales: function () {}
                            </p>

                            <p>
                                Uso de de this, las arrow functions Heredan el this del contexto padre 
                                (lexical scope). Las funciones tradicionales tienen su propio contexto para this
                                (dinamico).
                            </p>

                             <p>
                                arguments, las arrow funstions no tienen el objeto arguments, las 
                                funciones tradicionales tienen el objeto arguments
                            </p>

                            <p>
                                Contructores, las arrow functions no pueden usarse como constructor (new),
                                las funciones tradicionales si pueden usarse como constructor (new MiFuncion())
                            </p>

                            <h2>Uso comun en react</h2>

                            <p>
                                En react, las arrow functions se usan mucho para:
                            </p>

                            <CodeSpaceV2 title={`Manejo de eventos`} rawCode={`<button onClick={() => console.log("Click")}>Presiona</button>`} />

                            <CodeSpaceV2 title={'Componentes funcionales'} rawCode={`const MiComponente = () => <h1>Hola React</h1>;`} />

                            <CodeSpaceV2 title={'Funciones dentro de hooks'} rawCode={`useEffect(() => {\nfetchData();\n }, []);`} />

                            <h2>Buenas Practicas</h2>

                            <p>
                                Usar arrow functions para callbacks y metodos cortos.
                                Evitar arrow functions en metodos de objetos si necesitas acceder a this del objeto
                                Preferir arrow functions en React para evitar problemas con this.
                            </p>

                            <CodeSpaceV2 title={"Ejemplo mala practica"} rawCode={`const objeto = {\n valor: 10,\n incremento: () => {\n
                            this.valor++; // Error: this no apunta al objeto\n }\n };`} />


                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )

}
