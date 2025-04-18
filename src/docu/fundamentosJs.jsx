import { CodeSpaceV2 } from "../componentes/codeSpace/CodeSpaceV2"
import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"
import { TreeMap } from "../componentes/treeMap/TreeMap"

export function FundamentosJs(){

    const pageMap = [
        {
            id: 1,
            section: 'Arrow Functions',
            childs: [
                {
                    titulo: 'Sintaxis Basica',
                    id: 'sintaxisArrow',
                },
                {
                    titulo: 'Parentesis en los Parametros',
                    id: 'parentesisArrow',
                },
                {
                    titulo: 'Diferencias',
                    id: 'diferenciaArrow',
                },
                {
                    titulo: 'Uso comun en react',
                    id: 'usoreactArrow',
                },
                {
                    titulo: 'Buenas Practicas',
                    id: 'practicasArrow',
                }
            ],
        },
        {
            id: 2,
            section: 'Template Literals',
            childs: [
                {
                    titulo: 'Sintaxis Basica',
                    id: 'sintaxisBactips',
                },
            ],
        }
    ]

    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Fundamentos de Js"} text={"Por Steve 15/04/2025"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>

                            <h1>Arrow Functions (Funciones Flecha)</h1>

                            <h2 id="sintaxisArrow">Sintaxis Basica</h2>

                            <p>
                                Las arrow functions son una forma mas corta de escribir funciones en JavaScript.
                            </p>

                            <CodeSpaceV2 title={"Funcion tradicional"} rawCode={`function suma(a, b) {\n return a + b;\n}\n`} />

                            <CodeSpaceV2 title={"Arrow function equivalente"} rawCode={`const suma = (a, b) => {\nreturn a + b;\n};\n`} />

                            <p>
                                Si el cuerpo es una sola lineam, se puede omitir {} y el return
                            </p>

                            <CodeSpaceV2 title={"Sin simbolos"} rawCode={`const suma = (a, b) => a + b;\n`} />

                            <h2 id="parentesisArrow">Parentesis en los Parametros</h2>

                            <p>
                                Un parametro: Los parentesis son opcionales.
                            </p>

                            <CodeSpaceV2 title={"Un solo parametro"} rawCode={`const cuadrado = x => x * x;\n`} />

                            <p>
                                Sin parametros: Se usan parentesis vacios.
                            </p>

                            <CodeSpaceV2 title={"Sin parametros"} rawCode={`const saludo = () => "Hola Mundo";\n`} />

                            <p>
                                Varios parametros: Requiren parentesis.
                            </p>

                            <CodeSpaceV2 title={"Varios parametros"} rawCode={`const resta = (a,b) => a - b;\n`} />

                            <h2 id="diferenciaArrow">Diferencias</h2>

                            <h3>Sintaxis</h3>

                            <p>
                                Las arrow funcion son mas cortas el usar la sintaxis: () => {} a 
                                diferencia de las funciones tradicionales: function () {}
                            </p>

                            <h3>Uso de de this</h3>

                            <p>
                                Las arrow functions Heredan el this del contexto padre 
                                (lexical scope). Las funciones tradicionales tienen su propio contexto para this
                                (dinamico).
                            </p>

                            <h3>Arguments</h3>

                             <p>
                                Las arrow funstions no tienen el objeto arguments, las 
                                funciones tradicionales tienen el objeto arguments
                            </p>

                            <h3>Contructores</h3>

                            <p>
                                Las arrow functions no pueden usarse como constructor (new),
                                las funciones tradicionales si pueden usarse como constructor (new MiFuncion())
                            </p>

                            <h2 id="usoreactArrow">Uso comun en react</h2>

                            <p>
                                En react, las arrow functions se usan mucho para:
                            </p>

                            <CodeSpaceV2 title={`Manejo de eventos`} rawCode={`<button onClick={() => console.log("Click")}>\nPresiona\n</button>\n`} />

                            <CodeSpaceV2 title={'Componentes funcionales'} rawCode={`const MiComponente = () => <h1>Hola React</h1>;\n`} />

                            <CodeSpaceV2 title={'Funciones dentro de hooks'} rawCode={`useEffect(() => {\nfetchData();\n }, []);\n`} />

                            <h2 id="practicasArrow">Buenas Practicas</h2>

                            <p>
                                Usar arrow functions para callbacks y metodos cortos.
                                Evitar arrow functions en metodos de objetos si necesitas acceder a this del objeto
                                Preferir arrow functions en React para evitar problemas con this.
                            </p>

                            <CodeSpaceV2 title={"Ejemplo mala practica"} rawCode={`const objeto = {\n valor: 10,\n incremento: () => {\n
                            this.valor++; // Error: this no apunta al objeto\n }\n };`} />

                            <h1>Template Literals (Plantillas de Cadena/Template Strings)</h1>

                            <p>Son una mejora a las cadenas de texto tradicionales ("" o ''), que permiten: </p>

                            <p>
                                Interpolacion de variables (incrustar expresiones directamente).
                            </p>

                            <p>
                                Cadenas multilinea sin necesidad de \n
                            </p>

                            <p>
                                Sintaxis mas legible usando acentos invertidos (`)
                            </p>

                            <h2 id="sintaxisBactips">Sintaxis Basica</h2>

                            <CodeSpaceV2 title={'Ejemplo'} rawCode={`const nombre = "Ana";\n const saludo = \` Hola, \${nombre} \`; // Usa backticks (\`\`) y \$\{\}\n console.log(saludo); // "Hola, Ana"`} />

                            <p>
                                Comparacion con strings tradicionales
                            </p>

                            <CodeSpaceV2 title={'Ejmplo'} rawCode={`// Antes (ES5)\n var saludo = "Hola, " + nombre;\n  // Ahora (ES6+)\n const saludo = \`Hola, \$\{nombre\}\`; // Más claro y conciso\n`} />

                            <h2 id="caracteristicasBacktips">Caracteristicas Principales</h2>

                            <p>
                                Interpolacion de variables y expresiones: Puedes incluir cualquier expresion JavaScript dentro de $ { }
                            </p>

                            <CodeSpaceV2 title={'Ejemplo'} rawCode={`const a = 5;\n const b = 10;\n console.log(\`La suma es: \${a + b}\`); // "La suma es: 15"\n // Con funciones\n function saludar(nombre) {\n return \`¡Hola, \${nombre.toUpperCase()}!\`;\n }\n console.log(saludar("Carlos")); // "¡Hola, CARLOS!"`} />
                            
                            <p>
                                Cadenas multilinea: permite crear multiples lineas en una cadena sin tener que usar el caracter \n
                            </p>

                            <CodeSpaceV2 title={'Ejemplo'} rawCode={`const mensaje = \`\n Linea 1\n Linea 2\n Linea 3\n \`;\n // Respeta los saltos de línea y la indentación\n`} />

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )

}
