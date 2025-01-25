import { DivArticle, DivContent } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function Trabajo1(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Trabajar como programador"} text={"Por Steve 16/08/2024"} />

            <DivArticle>
                <DivContent>
                    <p>
                        Cuando estaba en la carrera siempre teniamos curiosidad o tambien creiamos mitos 
                        sobre trabajar en la programacion, ahora que trabajo como programador me doy cuenta 
                        que la realidad es muy diferente a como todos piensan.
                    </p>

                    <p>
                        Una de las primeras cosas que me parecio raro es que lo que solian decirme algunnos maestros 
                        pues resulto ser mentira o basicamente no aplicaba en todos los casos, por ejemplo solian decir 
                        que buscaramos como sulucionar algun problema o que no podriamos preguntar en google cuando 
                        trabajaramos y pues la verdad es que muchas veces he tenido que buscar el google, que si bien no
                        suelo buscar algo como "Ordener una arreglo de numeros" o "como crear una funcion que me de el 
                        promedio de edades" si suelo buscar a que se refiere algun error, como se usa un funcion de java script 
                        por ejemplo map, find o filter, o tambien suelo buscar alfguna funcion equivalente pero en otro 
                        lenguaje. 
                    </p>

                    <p>
                        Si bien no suelo buscar tanto 
                    </p>
                </DivContent>
            </DivArticle>
        </>
    )
}