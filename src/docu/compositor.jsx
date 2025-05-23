import { DivArticle, DivCol, DivContent, DivRow, DivSection } from "../componentes/contenedores/contenedores"
import { Portada } from "../componentes/portada/portada"

export function Compositor() {
      return (
            <>
                  <Portada imgPortada={"/Assets/steveA.png"} title={"Que es composer?"} text={"Por Steve 23/08/2024"} />

                  <DivRow>
                        <DivCol>

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

                                          <h3>Gestión de Dependencias</h3>

                                          <p>
                                                Composer descarga e instala automáticamente todas las bibliotecas y 
                                                paquetes que tu proyecto necesita, según lo especificado en un archivo composer.json.
                                                Puedes especificar versiones específicas de las dependencias para asegurarte de que 
                                                todas las dependencias sean compatibles entre sí.
                                          </p>

                                          <h3>Autoloading</h3>

                                          <p>
                                                Composer también puede generar automáticamente un script de autoloading, que permite 
                                                cargar clases de forma automática sin tener que incluir manualmente cada archivo de clase en tu proyecto. 
                                                Esto es posible gracias a las convenciones de PSR-4, que Composer implementa.
                                          </p>

                                          <h3>Versionado Semántico</h3>

                                          <p>
                                                Composer sigue las reglas de versionado semántico (SemVer), lo que permite especificar 
                                                rangos de versiones para las dependencias. Esto ayuda a evitar problemas de compatibilidad 
                                                cuando una dependencia se actualiza.
                                          </p>

                                          <h3>Repositorio de Paquetes</h3>

                                          <p>
                                                Composer utiliza un repositorio central llamado Packagist para encontrar y descargar 
                                                paquetes de PHP. Packagist es el repositorio principal donde los desarrolladores publican 
                                                sus bibliotecas y herramientas para que otros puedan usarlas.
                                          </p>

                                          <h3>Archivo composer.json</h3>

                                          <p>
                                                El archivo composer.json es donde defines las dependencias de tu proyecto. Aquí es donde 
                                                especificas qué bibliotecas necesitas, sus versiones, y cualquier otro metadato necesario.
                                          </p>

                                          <h2>Comandos Básicos de Composer</h2>

                                          <p>
                                                

                                                Instalar Dependencias: Instala las dependencias definidas en composer.json.

                                                composer install

                                                Actualizar Dependencias: Actualiza las dependencias a sus versiones más recientes permitidas por composer.json.

                                                composer update

                                                Añadir una Dependencia: Añade una nueva biblioteca al proyecto y la instala.

                                                composer require nombre/paquete

                                                Eliminar una Dependencia: Elimina una biblioteca del proyecto y actualiza composer.json.

                                                composer remove nombre/paquete
                                          </p>

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





