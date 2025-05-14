import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirstStepGo(){


    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en go"} text={"Por Steve 10/05/2025"} />

            <DivRow>
                <DivCol>
                    
                </DivCol>

                <DivCol>

                    <DivArticle>
                        <DivContent>

                            <h1>Preparar ambiente para go</h1>

                            <p>
                                Para poder ejecutar go, debemos instalarlo y para esto debemos ir a la 
                                pagina oficial y dependiendo del sistema operativo seguir diferentes 
                                instrucciones
                            </p>

                            <h3>Windows</h3>

                            <p>
                                Basta con usar el tipico instalador y dar siguiente, siguiente y siguiente hasta 
                                terminar con la instalacion del programa y cerrar el instalador
                            </p>

                            <h3>MacOs</h3>

                            <p>
                                Similar a windows tiene un instalador y basta con seguir las instrucciones para que 
                                se termine de instalar el lenguaje y cerrar el mismo instalador
                            </p>

                            <h3>Linux</h3>

                            <p>
                                En el caso de linux debemos descargar el archivo comprimido .tar.gz que aparece 
                                en la pagina principal, luego debemos abrir una terminal, nos colocamos en el mismo 
                                directorio donde descargamos este archivo y ejecutamos los siguientes comandos
                            </p>

                            <p>
                                sudo tar -C /usr/local -xzf go*.tar.gz
                            </p>

                            <p>
                                Despues debemos agregar go al path de la termina para que pueda ser reconocido
                            </p>

                            <p>
                                echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc
                                source ~/.bashrc
                            </p>
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}