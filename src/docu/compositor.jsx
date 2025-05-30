import { CodeSpaceV3 } from "../componentes/codeSpace/CodeSpaceV3"
import { DivArticle, DivCol, DivContent, DivRow} from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"
import { TreeMap } from "../componentes/treeMap/TreeMap"

export function Compositor() {

      const pageMap = [
            {
                  id: 1,
                  section: 'Funcionalidades Principales',
                  childs: [
                        {
                              titulo: 'Gestión de Dependencias',
                              id: 'gestionDependencia',
                        },
                        {
                              titulo: 'Autoloading',
                              id: 'autoloading',
                        },
                        {
                              titulo: 'Versionado Semántico',
                              id: 'versionadoSemantico',
                        },
                        {
                              titulo: 'Repositorio de Paquetes',
                              id: 'repositorio',
                        },
                        {
                              titulo: 'Archivo composer.json',
                              id: 'composerjson',
                        }
                  ]
            },
            {
                  id: 2,
                  section: 'Comandos Básicos de Composer',
                  childs: [
                        {
                              title: 'Instalar Dependencias',
                              id: 'instalar',
                        }
                  ]
            }
      ]

      return (
            <>
                  <Portada imgPortada={"/Assets/steveA.png"} title={"Que es composer?"} text={"Por Steve 23/08/2024"} />

                  <DivRow>
                        <DivCol>
                              <TreeMap titulo={'Mapa del sitio'} elementos={pageMap} />
                        </DivCol>

                        <DivCol>
                              <DivArticle>
                                    <DivContent>

                                          <h1>Sobre composer</h1>

                                          <p>
                                                Cuando inicias un desarrollo en una pila de tecnologia
                                                que involucra el lenguaje php entonces es posible que
                                                te encuentres con un programa llamado composer, el cual
                                                puede que no conoscas pero no resulta tan complejo
                                          </p>

                                          <p>
                                                Si has trabajado con proyectos de JavaScript y con
                                                npm entonces tienes el concepto de lo que es un manejador
                                                de paquetes y composer es eso aunque digamos que con
                                                otro lenguaje como objetivo
                                          </p>

                                          <p>
                                                Composer es una herramienta de gestión de dependencias para PHP. Facilita 
                                                la administración de las librerías y paquetes que un proyecto PHP necesita para 
                                                funcionar. Composer permite declarar las bibliotecas que tu proyecto depende y se 
                                                encarga de instalarlas y actualizarlas según sea necesario, garantizando que tengas 
                                                todas las versiones correctas y compatibles.
                                          </p>

                                          <h2>Funcionalidades Principales de Composer</h2>

                                          <h3 id='gestionDependencia'>Gestión de Dependencias</h3>

                                          <p>
                                                Composer descarga e instala automáticamente todas las bibliotecas y 
                                                paquetes que tu proyecto necesita, según lo especificado en un archivo composer.json.
                                                Puedes especificar versiones específicas de las dependencias para asegurarte de que 
                                                todas las dependencias sean compatibles entre sí.
                                          </p>

                                          <h3 id='autoloading'>Autoloading</h3>

                                          <p>
                                                Composer también puede generar automáticamente un script de autoloading, que permite 
                                                cargar clases de forma automática sin tener que incluir manualmente cada archivo de clase en tu proyecto. 
                                                Esto es posible gracias a las convenciones de PSR-4, que Composer implementa.
                                          </p>

                                          <h3 id='versionadoSemantico'>Versionado Semántico</h3>

                                          <p>
                                                Composer sigue las reglas de versionado semántico (SemVer), lo que permite especificar 
                                                rangos de versiones para las dependencias. Esto ayuda a evitar problemas de compatibilidad 
                                                cuando una dependencia se actualiza.
                                          </p>

                                          <h3 id='repositorio'>Repositorio de Paquetes</h3>

                                          <p>
                                                Composer utiliza un repositorio central llamado Packagist para encontrar y descargar 
                                                paquetes de PHP. Packagist es el repositorio principal donde los desarrolladores publican 
                                                sus bibliotecas y herramientas para que otros puedan usarlas.
                                          </p>

                                          <h3 id='composerjson'>Archivo composer.json</h3>

                                          <p>
                                                El archivo composer.json es donde defines las dependencias de tu proyecto. Aquí es donde 
                                                especificas qué bibliotecas necesitas, sus versiones, y cualquier otro metadato necesario.
                                          </p>

                                          <h2>Comandos Básicos de Composer</h2>

                                          <h3 id='instalar'>Instalar Dependencias</h3>

                                          <p>
                                                Instala las dependencias definidas en composer.json.
                                          </p>

                                          <CodeSpaceV3 title={'Instalar dependencias'} rawCode={`composer install`} />

                                          <h3>Actualizar Dependencias</h3>

                                          <p>
                                                Actualiza las dependencias a sus versiones más recientes permitidas por composer.json.
                                          </p>

                                          <CodeSpaceV3 title={'Actualizar dependencias'} rawCode={`composer update`} />


                                          <h3>Añadir una Dependencia</h3>

                                          <p>
                                                Añade una nueva biblioteca al proyecto y la instala.
                                          </p>

                                          <CodeSpaceV3 title={'Añadir dependencia'} rawCode={`composer require nombre/paquete`} />

                                          <h3>Eliminar una Dependencia</h3>

                                          <p>
                                                Elimina una biblioteca del proyecto y actualiza composer.json.
                                          </p>

                                          <CodeSpaceV3 title={'Eliminar dependencia'} rawCode={`composer remove nombre/paquete`} />

                                          <p>
                                                Composer es una herramienta esencial para cualquier proyecto PHP moderno. Facilita la gestión de dependencias, asegurando que todas las bibliotecas necesarias estén disponibles y funcionando correctamente en tu proyecto, mientras automatiza tareas tediosas como el autoloading de clases. Es ampliamente utilizado en la comunidad PHP y ha transformado la forma en que los desarrolladores manejan sus proyectos.
                                          </p>

                                    </DivContent>
                              </DivArticle>
                        </DivCol>
                  </DivRow>
            </>
      )
}





