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

                            <p>
                                Esto agrega go a nuestro $PATH y ahora podemos verificar la version de go que tenemos instalado con el siguiente comando
                            </p>

                            <p>
                                go version
                            </p>

                            <p>
                                Esto nos mostrara la version de go que tenemos instalada y con esto sabremos que todo se instalo correctamente
                            </p>

                            <h2>Crear el primer programa en go</h2>

                            <p>
                                Ahora con el entorno configurado podemos crear un progama simple de hola mundo
                            </p>

                            <p>
                                package main

                                import "fmt"

                                func main() {
                                    fmt.Println("¡Hola, Linux Mint!")
                                }
                            </p>

                            <p>
                                Guardamos el archivo como hola.go o el nombre que queramos y podemos ejecutarlo de la siguiente manera
                            </p>

                            <p>
                                go run hola.go # o usar el nombre que pusimos al archivo
                            </p>

                            <p>
                                Si todo sale bien deberiamos ver el mensaje hola mundo en la consola
                            </p>

                            <h2>Bonus configurar camperta para librerias</h2>

                            <p>
                                Por defecto go instalara librerias externas que configuremos en el escritorio 
                                del usuario que seria una ruta como /home/usuario pero podemos cambiar esto de la siguiente manera
                            </p>

                            <p>
                                sudo mkdir -p /opt/goprojects # o puede ser mejor golibrerias
                                sudo chmod -R $USER:$USER /opt/goprojects
                                export GOPATH=/opt/goprojects
                                export PATH=$PATH:$GOPATH/bin
                            </p>

                            <p>
                                De esta manera las instalacion de librerias o paquetes para go se instalar en /opt/goprojecs en 
                                lugar del escritorio predeterminado del usuario, si lo prefieres puedes ignorar esta configuracion 
                                puedes seguir guardado todo en el escritorio de usuario
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}