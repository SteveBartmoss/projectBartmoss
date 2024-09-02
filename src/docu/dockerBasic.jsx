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

          <p>
            Una imagen en Docker es una plantilla inmutable que contiene todo lo necesario para ejecutar una aplicación, incluyendo el código, las bibliotecas, las dependencias, las variables de entorno y los archivos de configuración. Las imágenes son la base para crear contenedores, que son instancias en ejecución de estas imágenes.
          </p>

          <p>
            Características de las imágenes Docker:
          </p>

          <p>
            Capas: Las imágenes de Docker están compuestas de capas, donde cada capa representa una instrucción en el Dockerfile, como la instalación de un paquete o la copia de archivos. Esto permite que las imágenes sean ligeras y eficientes, ya que las capas pueden ser compartidas entre múltiples imágenes.
          </p>

          <p>
            Inmutabilidad: Una vez que una imagen es creada, no puede ser modificada. Esto garantiza que la misma imagen siempre producirá el mismo contenedor, lo que es clave para la reproducibilidad y la consistencia en diferentes entornos.
          </p>

          <p>
            Versionamiento: Las imágenes pueden tener múltiples versiones o tags, permitiendo a los desarrolladores y operadores especificar qué versión de la aplicación desean ejecutar.
          </p>

          <p>
            Distribución: Las imágenes pueden ser distribuidas a través de un registro, como Docker Hub, lo que facilita el compartir y desplegar aplicaciones en diferentes sistemas o entornos.
          </p>

          

        </DivArticle>
      </DivSection>
    </>
  )
}
