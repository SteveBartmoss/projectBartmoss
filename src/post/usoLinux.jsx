import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function UsoLinux() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Mi experiencia con linux"} text={"Por Steve 25/04/2025"} />

            <DivRow>
                <DivCol>

                </DivCol>

                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <p>
                                Por un largo tiempo estuve en el lado oscuro, era usuario de windows y
                                no tenia idea de lo que era un buen servicio de software, tener un buen manejo
                                de recursos y general usar un sistema operativo que se preocupa por ser de utilidad.
                                Esto puede sonar muy pesimista o como la tipica charla que un linuxero te da pero luego
                                de usar el sistema por al menos 3 años puedo decir que tienen razon, en este post hablare
                                sobre mi experiencia con el sistema operativo del famoso pingüino.
                            </p>

                            <h2>Mi experiencia usando linux</h2>

                            <p>
                                Una de las principales razones para usar linux fue la universidad, empece un nuevo semestre y tomaria clases con
                                un profesor que era bastante fan de linux y que me daria puntos extras si instalaba linux como
                                mi unica distribucion asi que no tenia mucho que perder pero si por ganar, tome una maquina vieja que ya
                                no se usaba y que volveria a la vida por este semestre y seleccione una distribucion simple pero poderosa
                                Ubuntu la vieja confiable.
                            </p>

                            <p>
                                Mis primeras experiencias no fueron precisamente buenas ya que por error instale una version reducida de ubuntu, la cual no tenia
                                todos los drivers necesarios para mi laptop asi que no podia conectarme a la red wifi y tampoco funcionaba bien
                                el trackpad de la laptop. Cuando tuve tiempo y volvi a instalar la distribucion note que habia instalado una version erronea
                                y solo tuve que volver a instalar todo de forma correcta, seguramente alguien que sepa mas del tema y este leyendo esto
                                pensara que simplemente tenia que instalar los controladores y todo estaria resuelto, pero yo era un usuario novato asi que
                                no sabia como hacer esto y simplemente decidi reinstalar todo de nuevo.
                            </p>

                            <h2>Tener los recursos para ti</h2>

                            <p>
                                Cuando la mala experiencia de la instalacion paso note algo interesante al usar el nuevo sistema 
                                operativo ya que normalmente el uso de memoria suele mayor, por ejemplo si tienes instalado solo 4gigas 
                                de ram, windows suele usar 3.5 gigas o un poco menos asi que te queda libre muy poca memoria  y solo te queda 
                                una cantidad decente si tienes instalado al menos 16 gigas de ram. Cuando trabajaba con ubuntu esto no era asi 
                                pues podia ver en el monitos de recursos como tenia disponibles 7 gigas de ram de los 8 que tenia la laptop, esto 
                                me sorprendio bastante pues no pense que algo asi fuera posible y ademas se podia notar que el uso de ram era mas 
                                eficiente pues nunca se sentian lentos los precesos y tampoco se queda colgada la computadora cuando abria 
                                algun otro programa.
                            </p>

                            <p>
                                Algo que tambien me parecion interesante es que al principio me esforce por llevar la limite el equipo 
                                ya que con windows era facil congelar el sistema, bastaba con tener mas de 3 programas abierto para 
                                que se notara que el equipo le costaba trajabar, pero cuando intente hacer lo mismo con ubuntu no lograba 
                                hacerlo tan facil. Primero probe a mantener corriendo mi proyecto web pero esto realmente no causaba gran impacto 
                                asi que probe a tener varias pestanas de fireforx abiertas y solo note un ligero cambio en el tiempo en el 
                                que respondia, decidio que era tiempo de aumentar la carga asi que puse al equipo a descargar archivos de video y 
                                tambien lo puse a copiar multiples carpetas de un lado a otro. Esto finalmente detuvo el equipo y pense que tendria 
                                que reiniciarlo como suelo hacer con windows pero me sorprendi al ver que aunque el equipo empezaba a congelarse 
                                no dejaba de responder del todo si no que hacia lo posible por terminar procesos, poco a poco iba liberando los procesos 
                                en cola asi que por unos minutos se congelaba parcialmente pero se iba recuperando con el tiempo.
                            </p>

                            <h2>Todo con un simple comando</h2>

                            <p>
                                Otro de los aspectos que me sorprendio al usar el sistema fue la facilidad con la que podia instalar programas, 
                                si puede que pienses que esto es una contradiccion al ser linux un sistema en el que los ejecutables como los de 
                                windows no existen pero la verdad es que el gestor de paquete de ubuntu y las distribuciones basadas en debian 
                                es bastante bueno y al menos en mi caso la mayoria de herramientas de desarrollo estab disponibles por apt. En los 
                                casos en los que no existia un paquete bastaba con buscar la aplicacion desde el navegador y era comun encontrar 
                                un paquete de tipo .deb que es el estandar para las distribuciones basadas en debian y que se instalar con el 
                                mismo gestor de paquetes, realmente fueron pocos los programas que no podia instalar mediante el gestor de paquetes 
                                pero es importante aclarar que en mi caso solo usaba mi equipo para desarollar y puede que si lo usas mas como 
                                equipo de recreacion y diario si notes que ciertas aplicaciones no estan disponibles.
                            </p>

                            <p>
                                Una de las mejores herramientas que tiene un sistema de tipo linux es la terminal ya que es bastante buena y supera 
                                las terminales de macos y windows, por lo general se usa bash pero esto es opcional ya que se puede instalar alguna 
                                otra terminal que se quiera usar. Los comandos que se usa en el sistema linux son bastantes utiles pero ademas hacen 
                                mas sentido que algunos comandos de windows (ya que los comandos de macos son muy similares) y con el tiempo se volvio 
                                una gran herramienta de desarollo y en general del sistema pues gran parte del tiempo en el que usas el sistema operativo 
                                lo pasaras en la consola configurando algo del sistema o instalando paquetes.
                            </p>

                            <h2>Personalizacion a otro nivel</h2>

                            <p>
                                Otra de las cosas que puede notar es que el nivel de personalizacion que permite este sistema es mayor a la que normalmente 
                                permite otros sistemas, con esto no me refiero a que puedas cambiar el color de enfasis o poner una imagen como fondo de pantalla 
                                mas bien me refiero a que el sistema permite cambiar la estructura del propio sistema. No te gusta el sistema de archivos? puedes 
                                cambiarlo, el escritorio no de agrada? busca alguno que se masa llamativo e instalalo, la gran mayoria de elementos que componen 
                                el sistema operativo pueden ser modificados y reemplazados por otro elemento diferente. En el caso de que ninguna opcion sea de tu 
                                agrado incluso puedes crear tu propia version ya que el codigo fuente suele estar disponible para el usuario y puedes realizar 
                                modificaciones en el mismo.
                            </p>

                            <p>
                                Este nivel de personalizacion puede ser un arma de doble filo ya que si bien puedes modificar todo a tu gusto, tambien puedes terminar 
                                rompiendo tu ditribucion dejandola inservible pero aun asi puedes estar seguro de que aprendiste algo o que aprenderas algo 
                                tratando de reparar lo que rompiste. En el caso de que no puedas o no quieras pasar tanto tiempo siempre puedes simplemente volver a 
                                instalar todo el sistema operativo de nuevo y listo, una solucion extremista pero que aun asi puede solucionar un problema de este tipo
                            </p>
                            
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </>
    )
}