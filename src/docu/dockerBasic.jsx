import { DivArticle, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function DockerBasic() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Empezar con Docker"} text={"Por Steve 30/08/2024"} />

      <DivArticle>
        <DivSection>

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

          <p>
            Un contenedor en Docker es una instancia en ejecución de una imagen de Docker. Es un entorno aislado donde se ejecuta una aplicación con todas sus dependencias, configuraciones, y bibliotecas necesarias para funcionar correctamente. A diferencia de las máquinas virtuales, los contenedores son ligeros y comparten el mismo núcleo del sistema operativo, lo que los hace más eficientes en términos de recursos.
          </p>

          <p>
            Características principales de un contenedor Docker:
          </p>

          <p>
            Aislamiento: Un contenedor está aislado del sistema host y de otros contenedores, lo que significa que cada contenedor tiene su propio sistema de archivos, espacio de red, y entorno de ejecución. Sin embargo, todos los contenedores comparten el mismo núcleo del sistema operativo.
          </p>

          <p>
            Portabilidad: Los contenedores pueden ejecutarse de manera consistente en diferentes entornos, ya sea en una máquina local, en un servidor de producción, o en un entorno en la nube. Esto es posible porque los contenedores incluyen todas las dependencias necesarias en la imagen base.
          </p>

          <p>
            Eficiencia: A diferencia de las máquinas virtuales, que requieren su propio sistema operativo completo, los contenedores comparten el núcleo del sistema operativo del host, lo que reduce el uso de recursos y permite ejecutar múltiples contenedores en una sola máquina de manera más eficiente.
          </p>

          <p>
            Ciclo de vida: Los contenedores pueden iniciarse, detenerse, reiniciarse y eliminarse de manera muy rápida, lo que facilita su manejo en entornos de desarrollo, pruebas, y producción.
          </p>

          <p>
            Volatilidad: Un contenedor es efímero por naturaleza. Esto significa que, si se elimina un contenedor, todo lo que estaba en él se pierde a menos que se haya configurado almacenamiento persistente o se hayan guardado los datos en un volumen.
          </p>

        </DivSection>
      </DivArticle>
    </>
  )
}
