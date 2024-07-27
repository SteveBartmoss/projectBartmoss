import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function JsBasura(){
    return(
        <>
        <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en react"} text={"Por Steve 27/07/2024"} />

        <DivSection>
            <DivArticle>

                <h1>Java Script es confuso</h1>

                <p>
                    No me malentiendan crear un lenguaje de programacion 
                    es dificil pero por eso mismo es que considero que algunas 
                    cosas de JavaScript no se trata de la mejor implementacion 
                    ya que por ejemplo en lenguajes como c o java debemos tener 
                    claro y manejar de forma stricta el tipo de datos que asignamos 
                    a una variable. 
                </p>

                <p>
                    Ya que por ejemplo cosas como el siguiente codigo darian error
                </p>

                <code>
                    let nombre=''

                    nombre=1
                </code>

                <p>
                    Desde aqui vemos un problema pues tendriamos que declara la variable con 
                    el tipo de dato que acepta que en este caso seria string pero 
                    JavaScript es mas flexible y no deja simplemente declarar la 
                    varibale, muy facil no ya no tenemos que preocuparnos por asignar 
                    los tipos de datos lo cual es mejor verdad ?
                </p>

                <h2>El tipado dinamico no siempre es tu amigo</h2>

                <p>
                    Si bien declarar variables sin tener que asignarle un tipo 
                    de dato es util en casos en los que tenemos que declarar estructuras 
                    complejas como la siguiente
                </p>

                <code>
                    let alumo=&lbrace;
                        nombre: '',
                        edad: 0,
                        grupo: 'A'
                    &rbrace;
                </code>

                <p>
                    En estos casos es muy util poder crear una estructura de datos 
                    sin tener que declarar la clase y ademas tener que implementarla 
                    pero esta misma flexibilidad nos puede dar dolores de cabeza ya que 
                </p>
            </DivArticle>
        </DivSection>
        </>
    )
}