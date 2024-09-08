import { DivArticle, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function VsCodeHack() {
  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"El hook Context en react"} text={"Por Steve 06/09/2024"} />

      <DivSection>
        <DivArticle>
          <p>
            Si usas vsCode, entonces estos atajos te pueden servir
          </p>

          <p>
            cntrl + b permite colapsar la barra de actividad del editor, que es donde se suele mostrar el
            explorador de archivos, el estatus de git o diferentes extensiones que tenemos instaladas,
            esto permite liberar mas espacio visual a la hora de programar.
          </p>

          <p>
            cntrl + p nos permitira buscar de forma rapida un archivo en nuestro proyecto, basta con
            poner el nombre del archivo que no encontramos para poder abrir el archivo.
          </p>

          <p>
            cntrl + t permite buscar el contenido dentro de un archivo, como por ejemplo
            si queremos buscar un archivo pero no recordamos el nombre pero si el nombre
            un metodo podemos buscar el nombre del metodo con este comando
          </p>

          <p>
            alt + flecha abajo/flecha arriba permite mover una linea de texto hacia arriba 
            o hacia abajo
          </p>

          <p>
            alt + flecha izquierda/flecha derecha permite movernos horizontalmente 
            entre palabras lo cual es mas rapido que saltar espacio por espacio
          </p>

          <p>
            alt + shift + flecha izquierda/flecha derecha seleccionara las palabras que 
            vamos recoriendo lo cual es util si queremos hacar un copiado o correccion de 
            una palabra
          </p>

          <p>
            cntrl + d Si tenemos seleccionada una palara y esta se repite en el documento se puede 
            seleccionar otra instancia mas de la palabra usando este comando
          </p>

          <p>
            cntrl + a permite seleccionar todo el texto de una archivo muy util para borrar su contenido 
            o copiarlo a algun otro lado
          </p>
        </DivArticle>
      </DivSection>
    </>
  )
}



