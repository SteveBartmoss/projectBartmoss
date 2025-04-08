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
                            
                            <p>
                                Para el entorno de ejecucion tenemos la opcion de nodejs, que si bien 
                                esta pensado para aplciaciones del lado del servidor tambien funciona 
                                para levantar proyectos con frameworks de javascript como vue, angular o next.
                                Tambien es util para ejecutar codigo de javascript ya que si por ejemplo solo necesitas 
                                correr un codigo de ejemplo o estas resolviendo algun problema y solo quieres 
                                dar forma al codigo de una forma rapida
                            </p>

                            <h3>NodeJs</h3>

                            <p>
                                El entorno de ejecucion que suelo usar para javascript es nodejs, ya que estoy familiarizado con el 
                                y resulta facil trabajar con le mismo. Para instalarlo tenemos diferentes opciones:
                            </p>

                            <h3>Windows</h3>

                            <p>
                                Si estamos en windows basta con descargar el instalador de la siguiente liga 
                                basta con dar siguiente y todo estara instalado sin problemas
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}