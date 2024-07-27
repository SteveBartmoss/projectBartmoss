import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function JsBasura() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en react"} text={"Por Steve 27/07/2024"} />

            <DivSection>
                <DivArticle>

                    <h1>Java Script es confuso</h1>

                    <p>
                        Crear un lenguaje de programación es difícil,
                        pero precisamente por eso considero que algunas características
                        de JavaScript no son las mejores implementaciones.
                        Por ejemplo, en lenguajes como C o Java, debemos tener claro y
                        manejar de forma estricta el tipo de datos que asignamos a una variable.
                    </p>

                    <p>
                        Por ejemplo, el siguiente código daría error en esos lenguajes:
                    </p>

                    <code>
                        let x = "10";
                        x = x + 5; // En JavaScript esto resulta en "105" en lugar de un error.
                    </code>

                    <p>
                        Desde aquí vemos un problema, ya que tendríamos que declarar la variable
                        con el tipo de dato que acepta, que en este caso sería string. Sin embargo,
                        JavaScript es más flexible y nos permite simplemente declarar la variable.
                        Muy fácil, ¿no? Ya no tenemos que preocuparnos por asignar los tipos de datos,
                        lo cual es mejor, ¿verdad?
                    </p>

                    <h2>El tipado dinamico no siempre es tu amigo</h2>

                    <p>
                        Si bien declarar variables sin tener que asignarles un tipo de dato es útil en
                        casos en los que tenemos que declarar estructuras complejas como la siguiente:
                    </p>

                    <code>
                        let persona = &lbrace;
                            nombre: "Juan",
                            edad: 30,
                            direccion: &lbrace;
                                calle: "123 Calle Principal",
                                ciudad: "Ciudad",
                                pais: "País"
                            &rbrace;
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