import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function UsoLinux() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Usar linux"} text={"Por Steve 25/04/2025"} />

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
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </>
    )
}