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

                            <h3>MacOs</h3>

                            <p>
                                Para la version del mac igual podemos descargar el archivo .pkg que permite 
                                usar el propio instalador de macos para que el usuario solo de unos cuantos clicks para 
                                instalar el programa que en este caso seria node js
                            </p>

                            <h3>Linux</h3>

                            <p>
                                En el caso de linux puede depender de la distribucion que uses, ya que por ejemplo 
                                distribuciones basadas en debian usaran herramientas como dpkg para instalar paquetes .deb pero 
                                otras distribuciones pueden ser diferentes
                            </p>

                            <p>
                                En el caso de distribuciones basadas en debian podemos usar el siguiente comando:
                            </p>

                            <p>
                                sudo apt install nodejs
                            </p>

                            <p>
                                Esto instalara nodejs desde los repositorios predeterminados asi que la version 
                                que instala puede no ser la mas actual ya que estos repositorios puede que no 
                                esten actualizandose constantemente. Ademas de esto tambien debemos instalar 
                                el gestor de paquetes de node con el siguiente comando
                            </p>

                            <p>
                                sudo apt install npm
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}