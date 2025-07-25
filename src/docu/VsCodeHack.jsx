import { DivArticle, DivCol, DivContent, DivRow, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"
import { TreeMap } from "../componentes/treeMap/TreeMap"

export function VsCodeHack() {

  const pageMap = [
    {
      id: 1,
      section: 'Comandado basicos',
      childs: [
        {
          titulo: 'ctrl b',
          id: 'ctrlb',
        },
        {
          titulo: 'ctrl p',
          id: 'ctrlb',
        },
        {
          titulo: 'ctrl t',
          id: 'ctrlt',
        },
        {
          titulo: 'alt flecha abajo/flecha arriba',
          id: 'altup',
        },
        {
          titulo: 'alt flecha izquierda/flecha derecha',
          id: 'altleft',
        },
        {
          titulo: 'alt shift flecha izquierda/flecha derecha',
          id: 'altshiftleft',
        },
        {
          titulo: 'ctrl d',
          id: 'ctrld',
        },
        {
          titulo: 'ctrl a',
          id: 'ctrla',
        },
      ]
    }
  ]

  return (
    <>
      <Portada imgPortada={"/Assets/steveA.png"} title={"Comandos de VsCode"} text={"Por Steve 06/09/2024"} />

      <DivRow>
        <DivCol>
          <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
        </DivCol>
        <DivCol>
          <DivArticle>
            <DivContent>
              <h1>Comandos utiles de VsCode</h1>

              <p>
                Si usas vsCode, entonces estos atajos te pueden servir para
                mejorar tu productividad o simplemente trabajar de manera mas
                comoda
              </p>

              <h2 id='ctrlb'>ctrl + b</h2>

              <p>
                permite colapsar la barra de actividad del editor, que es donde se suele mostrar el
                explorador de archivos, el estatus de git o diferentes extensiones que tenemos instaladas,
                esto permite liberar mas espacio visual a la hora de programar.
              </p>

              <h2 id='ctrlb'>ctrl + p</h2>

              <p>
                nos permitira buscar de forma rapida un archivo en nuestro proyecto, basta con
                poner el nombre del archivo que no encontramos para poder abrir el archivo.
              </p>

              <h2 id='ctrlt'>ctrl + t</h2>

              <p>
                permite buscar el contenido dentro de un archivo, como por ejemplo
                si queremos buscar un archivo pero no recordamos el nombre pero si el nombre
                un metodo podemos buscar el nombre del metodo con este comando
              </p>

              <h2 id='altup'>alt + flecha abajo/flecha arriba</h2>

              <p>
                permite mover una linea de texto hacia arriba
                o hacia abajo
              </p>

              <h2 id='altleft'>alt + flecha izquierda/flecha derecha</h2>

              <p>
                permite movernos horizontalmente
                entre palabras lo cual es mas rapido que saltar espacio por espacio
              </p>

              <h2 id='altshiftleft'>alt + shift + flecha izquierda/flecha derecha</h2>

              <p>
                seleccionara las palabras que vamos recoriendo lo cual es util si
                queremos hacar un copiado o correccion de una palabra
              </p>

              <h2 id='ctrld'>ctrl + d</h2>

              <p>
                Si tenemos seleccionada una palara y esta se repite en el documento se puede
                seleccionar otra instancia mas de la palabra usando este comando
              </p>

              <h2 id='ctrla'>ctrl + a </h2>

              <p>
                permite seleccionar todo el texto de una archivo muy util para borrar su contenido
                o copiarlo a algun otro lado
              </p>

              <h2>alt + click izquiera</h2>

              <p>
                permite insertar un nuevo cursor en la linea en que hicimos click
              </p>

              <h2>alt + [ / ] </h2>

              <p>
                Permite identar las lineas de codigo o quitar la identacion de
                las lineas de codigo.
              </p>

            </DivContent>
          </DivArticle>
        </DivCol>
      </DivRow>
    </>
  )
}



