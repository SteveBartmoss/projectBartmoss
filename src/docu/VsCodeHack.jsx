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
        </DivArticle>
      </DivSection>
    </>
  )
}



