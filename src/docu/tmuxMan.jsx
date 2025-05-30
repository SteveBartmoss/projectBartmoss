import { CodeSpaceV3 } from "../componentes/codeSpace/CodeSpaceV3";
import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { TreeMap } from "../componentes/treeMap/TreeMap";


export function TmuxMan() {

    const pageMap = [
        {
            id: 1,
            section: 'Instalacion',
            childs: [
                {
                    titulo: 'Arch',
                    id: 'arch'
                },
            ]
        }
    ]

    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Manual de tmux"} text={"Por Steve 26/05/2025"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <h1>Que es tmux</h1>


                            <p>
                                Es una herramienta de terminal que permite tener una terminal multiplexada, lo
                                que quiere decir que desde una misma termninal podemos trabjar diferentes procesos por
                                eso el termino multiplexado. Tener una terminal multiplexada es una forma
                                eficiente de poder trabajar desde ella teniendo todo en la misma pantalla pero
                                tambien se agrega una capa extra para el usuario que puede ser un poco dificil.
                                Esta pagina de man pretende servir como referencia para los comandos generales de
                                esta herramienta.
                            </p>

                            <h1>Instalar tmux</h1>

                            <h3>Linux</h3>

                            <p>
                                Si estamos en linux podemos usar el gestor de paquete la distribucion que usas, a continuacion
                                se muestran algunos ejemplos
                            </p>

                            <h3 id='arch'>Arch linux</h3>

                            <CodeSpaceV3 title={'Comando'} rawCode="pacman -S tmux" />

                            <p></p>

                            <h3>Debian o derivados</h3>

                            <p>apt install tmux</p>

                            <h3>Fedora</h3>

                            <p>dnf install tmux</p>

                            <h3>RHEL or CentOS</h3>

                            <p>yum install tmux</p>

                            <h3>openSUSE</h3>

                            <p>zypper install tmux</p>

                            <h3>macOs</h3>

                            <p>
                                Si usamos el popular sistema de la manzana podemos usar algunos gestores 
                                para instalar esta herramienta
                            </p>

                            <h3>macOS HomeBrew</h3>

                            <p>brew install tmux</p>

                            <h3>macOs macporst</h3>

                            <p>port install tmux</p>

                            <h2>Uso basico de tmux</h2>

                            <h3>Iniciar tmux</h3>

                            <p>
                                tmux
                            </p>

                            <p>
                                Esto hara que el programa inicie y podremos notarlo porque en la parte inferior de la 
                                terminal tendremos una franja de color que nos indica en que capa de terminal estamos y 
                                el nombre que asignamos a esta terminal
                            </p>

                            <h3>Salir de la sesion actual</h3>

                            <p>
                                ctrl-b + d
                            </p>

                            <p>
                                De esta forma cerraremos el programa y regresamos a la terminal simple que se suele usar 
                                normalmente 
                            </p>

                            <h3>Dividir la ventana de forma vertical</h3>

                            <p>
                                ctrl-b + %
                            </p>

                            <p>
                                Con esto el panel actual se divive por la mitad de forma horizontal por lo que tendremos 
                                el panel izquierdo y el panel derecho, ambos funcionaran de forma independiente
                            </p>

                            <h3>Dividir la ventaba de forma horizaontal</h3>

                            <p>
                                ctrl-b + "
                            </p>

                            <p>
                                Similar al comando anterior divide el panel actual de forma horizontal por lo que tendremos 
                                el panel superior y el inferior, igual que antes los paneles funcionan de forma independiente
                            </p>

                            <h3>Moverse entre divisiones de la terminal</h3>

                            <p>
                                ctrl-b + flecha
                            </p>

                            <p>
                                De esta forma podemos movernos entre los paneles que tenemos en la sesion, las direcciones seran izquierda, derecha, arriba 
                                a bajo segun la flecha que usemos. De esta forma podemos interactuar con diferentes paneles y la division en la que estamos 
                                actualmente se resaltara de un color diferente al de los otros para indicarnos en donde estamos
                            </p>

                            <h3>Cerrar el panel actual</h3>

                            <p>
                                ctrl-b + x
                            </p>

                            <p>
                                Esto cerrara el panel actual pero no terminara el programa si tenemos paneles adicionales, de esta forma podemos 
                                cerrar un panel que ya no necesitamos, evitando terminar el programa
                            </p>

                            <h3>Crear una vetana nueva</h3>

                            <p>
                                ctrl-b + c
                            </p>

                            <p>
                                Esto creara otra ventana que podemos verlo como una capa superior, ya que no veremos una tab o algo 
                                similar mas bien veremos que el numero que tenemos en la franja inferior cambia pues ahora estamos una 
                                capa extra
                            </p>

                            <h3>Pasar a la siguiente ventana</h3>

                            <p>
                                ctrl-b + n
                            </p>

                            <h3>Volver a la ventana anterior</h3>

                            <p>
                                ctrl-b + p
                            </p>

                            <p>
                                Ambos comandos permiten navegar entre ventanas, por lo que podemos ver el comando n y p como un adelante y atras, con estos 
                                comandos podemos movernos entre las vetanas de la terminal o entre las capas de la tmux, ya que tambien podemos ver las ventanas 
                                como diferentes capas de la terminal que estamos multiplexando
                            </p>

                            <h3>Moverse a una ventana en especifico</h3>

                            <p>
                                ctrl-b + numero ID
                            </p>

                            <p>
                                Este comando es mas eficiente, ya que podemos movernos directamente a la section que queremos directamente, sin tener que pasar por las demas 
                                capas de la terminal.
                            </p>

                            <h3>Abrir el modo linea de comandos</h3>

                            <p>
                                ctrl-b + :
                            </p>

                            <p>
                                Este modo de trabajo es mas avanzado y permite ejecutar comandos como si de una misma terminal se tratara, de esta forma podemos configurar 
                                el mismo programa de tmux, ademas de realizar combos wombos que permiten trabajar de forma rapida con el programa
                            </p>

                            <h3>Mostrar todos los atajos</h3>

                            <p>
                                ctrl-b ?
                            </p>

                            <p>
                                Con esto podemos ver los atajos de la aplicacion asi que tambien podemos consultar esto si necesitamos algun 
                                atajo en especifico o si no sabemos que hacia cierto atajo
                            </p>

                            <h3>Listar las ventanas de la sesion actual</h3>

                            <p>
                                ctrl-b + w
                            </p>

                            <p>
                                De esta forma podemos ver todas las ventanas si es que no recordamos alguna en especifico a la que queremos 
                                movernos
                            </p>

                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}