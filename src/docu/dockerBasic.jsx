import { DivArticle, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function DockerBasic() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Empezar con Docker"} text={"Por Steve 30/08/2024"} />

      <DivSection>
        <DivArticle>
          <p>
            Como desarrollador es bueno utilizar herramientas que faciliten el trabajo
            y una de estas herramientas es docker, que nos permitira configurar
            ambientes de desarrollo y despliegue del mismo de una forma rapida
          </p>

          <p>
            Docker es una aplicacion que permite crear maquinas virtuales de
            una manera mas simple y eficiente al crear contenedores para
            cada maquina que tenemos que implementar, cada uno de los
            contenedores esta aislado entre ellos.
          </p>

          <p>
            Estos contenedores son mas eficientes y portatiles que
            una maquina virtual pero tambien dependen mas del sistema
            operavito que contiene el motor de docker
          </p>

          <p>
            Para hacer la instalacion podemos ir a la documentacion de docker
            en el siguiente enlace
          </p>

          <p>
            https://docs.docker.com/engine/install/debian/
          </p>

        </DivArticle>
      </DivSection>
    </>
  )
}






