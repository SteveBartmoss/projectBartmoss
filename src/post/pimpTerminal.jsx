import { DivArticle, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function PimpTerminal() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Pimp my Terminal"} text={"Por Steve 23/08/2024"} />

      <DivSection>
        <DivArticle>
          <p>
            Cuando eres una persona que pasa algo de tiempo
            mirando la terminal o que tiene que correr comandos
            de ves en cuando, entonces te puede interesar
            tener una terminal mas llamativa
          </p>

          <p>
            Goght

            Este es un programa que nos ayudara a tener un tema llamativo
            y sin tener que pasar mucho tiempo configurandolo pues
            basta con ir al siguiente sitio web:
          </p>

          <p>
            https://gogh-co.github.io/Gogh/
          </p>

          <p>
            Ahi podremos ver todos los esquemas de colores disponnibles
            y solo tenemos que elegir los codigos de los temas que queremos
            instala y listo
          </p>

          <p>
            Esto solos nos permite tener un esquema de colores llamativo pero
            si queremos algo mejor entonces podemos modificar el promp de nuestro
            terminal para que se va mas como si fuera un hacker entonces
            podemos modificar el promp del terminal
          </p>

        </DivArticle>
      </DivSection>
    </>
  )
}

