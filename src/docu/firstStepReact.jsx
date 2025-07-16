import { DivArticle, DivSection, DivContent, DivRow, DivCol } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { CodeSpace } from "../componentes/codeSpace/CodeSpace";
import { TreeMap } from "../componentes/treeMap/TreeMap";
import { CodeSpaceV2 } from "../componentes/codeSpace/CodeSpaceV2";
import { CodeSpaceV4 } from "../componentes/codeSpace/CodeSpaceV4";


export function FirstStepReact() {

    const pageMap=[
        {
            id: 1,
            section: 'Preparar ambiente',
            childs: [
                {
                    titulo: 'Antes de empezar',
                    id: 'begin',
                },
                {
                    titulo: 'Instalar node', 
                    id: 'nodeInstall'
                },
                {
                    titulo: 'Editor de Codigo',
                    id: 'codeEditor',
                },
            ],
        },
        {
            id: 2,
            section: 'Empezar con react',
            childs: [
                {
                    titulo: 'Crear un proyecto con react',
                    id: 'makeProject'
                },
                {
                    titulo: 'Estructura de directorios',
                    id: 'dirStructure'
                }
            ]
        }
    ]
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en react"} text={"Por Steve 21/07/2024"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Contenido del sitio'} elementos={pageMap} />
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>
                            <p>
                                La librería de React es una gran herramienta para crear
                                sitios web y aplicaciones de una manera simple y rápida.
                                Fue creada por Facebook y ahora cuenta con una gran comunidad,
                                lo que la convierte en una buena opción para empezar.
                            </p>

                            <h1 id='begin'>Antes de empezar</h1>

                            <p>
                                Para poder desarrollar aplicaciones en react es necesario
                                tener los siguientes elementos
                            </p>

                            <p>
                                Node.js <br />
                                Editor de codigo <br />
                                Terminal <br />
                            </p>

                            <h1 id='nodeInstall'>Instalar Node</h1>

                            <h2>Windos/MacOs</h2>

                            <p>
                                En caso de tener un sistema operativo como Windows o macOS,
                                es bastante simple. Solo tenemos que dirigirnos a la página
                                oficial de Node.js y seleccionar la versión del instalador
                                que necesitamos.
                            </p>

                            <a id="linkto" href="https://nodejs.org/en/download/prebuilt-installer" rel="noreferrer" target="_blank">Sitio de Node</a>

                            <h2>Linux</h2>

                            <p>
                                En el caso de Linux, el camino no siempre es fácil, pero,
                                como suelen decir, el camino así es. Afortunadamente, existen
                                formas simples de hacerlo, y ahora las veremos.
                            </p>

                            <h3>Usando nvm</h3>

                            <p>
                                Para esto, debemos instalar NVM, que es un manejador de versiones
                                de Node. Esta herramienta es muy útil, ya que permite administrar
                                diferentes versiones de Node sin tener que mover tantos archivos.
                            </p>

                            <p>
                                Para instalar NVM se puede usar el siguiente codigo en
                                la terminal
                            </p>

                            <CodeSpaceV4 title={'terminal'} rawCode={`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \n`} />

                            <p>
                                Una vez que ejecutemos el comando simplemente tenemos que
                                cerrar y abrir una nueva terminal para que se vean
                                reflejados los cambios
                            </p>

                            <p>
                                Se puede comprobar que tenemos instalada la herramienta
                                con el siguiente comando:
                            </p>

                            <CodeSpaceV4 title={'terminal'} rawCode={`nvm --version \n`} />

                            <p>
                                Esto nos muestra la versión de la herramienta, y si no aparece
                                en pantalla una serie de números, podemos continuar con el
                                siguiente comando para instalar Node.js:
                            </p>

                            <CodeSpaceV4 title={'terminal'} rawCode={`nvm install 14.4.0 \n`} />

                            <p>
                                Con esto, tenemos instalada la versión 14.4.0 de Node.js. Este
                                comando instala la versión de Node.js que especifiquemos, por lo
                                que solo necesitamos cambiar el número de versión en el comando
                                para instalar otra versión.
                            </p>

                            <p>
                                Estos otros comandos puden ser utiles si se esta usando
                                la herramienta NVM
                            </p>

                            <p>
                                Cambiar de version que se esta usando
                            </p>

                            <code>
                                nvm use número de versión
                            </code>

                            <p>
                                Listar las versiones de node que tenemos instaladas
                            </p>

                            <code>
                                nvm ls
                            </code>

                            <h3>Instalando Nodesource</h3>

                            <p>
                                Esto también permite instalar Node.js, pero utilizando
                                otra herramienta que es Nodesource, lo cual podemos hacer
                                con el siguiente comando.
                            </p>

                            <code>
                                curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
                            </code>

                            <p>
                                En este caso, indicamos que la versión es la 14,
                                ya que tenemos setup_14.x, pero podemos cambiar el
                                número por el que queremos instalar. Una vez hecho esto,
                                podemos ejecutar los siguientes comandos para instalar Node.js.
                            </p>

                            <code>
                                sudo apt-get install -y nodejs
                            </code>

                            <h1 id="codeEditor">Editor de codigo</h1>

                            <p>
                                El editor de código que suelo usar es VSCode, el cual también
                                es fácil de instalar y se puede obtener en el siguiente enlace.
                            </p>

                            <a id="linkto" href="https://code.visualstudio.com/Download" rel="noreferrer" target="_blank">vs Code</a>

                            <p>
                                Si ya tienes otro editor de codigo preferido se puede usar
                                cualquier otro que sea de tu agrado
                            </p>

                            <h1 id="makeProject">Crea un proyecto nuevo con react</h1>

                            <p>
                                Ahora que tenemos instalado el ambiente podemos
                                empezar con nuestra primera aplicacion de
                                react
                            </p>

                            <h2>Comando create-react-app</h2>

                            <p>
                                Lo primero que tenemos que hacer es abrir una
                                terminal en nuestra computadora para ejecutar
                                el siguiente comando:
                            </p>

                            <code>
                                npm create-react-app prueba
                            </code>

                            <p>
                                Esto crea un proyecto de react que estara listo
                                para desplegarse en caso de que se quiera hacer
                                alguna prueba
                            </p>

                            <p>
                                Nota: el comando no admite la siguiente sentencia Prueba, proyectoPrueba o proyecto_prueba
                                esto se debe a la forma en que trabaja el script y solo admite nombres en minusculas o con
                                kebab case por ejemplo proyecto-prueba
                            </p>

                            <p>
                                Una vez que el comando ese ejecute correctamente habra una carpeta con el nombre que
                                pasamos al comando y entonces podemos entrar a la carpeta del proyecto y levantar
                                el proyecto con el siguiente comando
                            </p>

                            <code>
                                npm start
                            </code>

                            <p>
                                Esto levanatara un servidor de desarrollo en nuestro equipo mediante la llamada de
                                react-scripts lo cual levantara el servidor en el local host de la maquina con el puerto
                                3000 por defecto, este servidor es accesible desde la red si usamos la ip de la maquina
                                y el puerto, esto nos permite poder ver la aplicacion desde diferentes dispositivos de manera
                                nativa lo cual es util cuando estas desarrollando una aplicación multi plataforma
                            </p>

                            <h1 id="dirStructure">Estructura de directorios</h1>

                            <p>
                                Dentro de la carpeta que creo el comando de react podremos ver la siguiente estructura de ficheros
                            </p>

                            <p>
                                public <br />
                                src <br />
                                node_modules
                            </p>

                            <h1>
                                Directorio public
                            </h1>

                            <p>
                                Este directorio es donde se almacenan cierta clase de archivos en genera cuenta con las siguientes
                                características
                            </p>

                            <h2>Archivos Estáticos</h2>

                            <p>
                                La carpeta public se utiliza para almacenar archivos estáticos que no necesitan ser procesados por Webpack. Estos archivos se copian tal cual al directorio de construcción (build) durante el proceso de construcción.
                            </p>

                            <h2>index.html</h2>

                            <p>
                                El archivo index.html en la carpeta public es la plantilla HTML principal de tu aplicación.
                                Durante el proceso de construcción, CRA inyecta automáticamente los bundles de JavaScript y CSS en este archivo.
                                Puedes personalizar este archivo para incluir meta tags, enlaces a hojas de estilo externas, scripts, etc.
                            </p>

                            <h2>Meta Tags y SEO</h2>

                            <p>
                                Puedes añadir meta tags dentro de index.html para mejorar el SEO y la apariencia de la página en los motores de búsqueda.
                                Ejemplos incluyen
                            </p>

                            <code>
                                meta name="description" content="Descripción de tu aplicación"  y meta property="og:image" content="/path/to/image.jpg"
                            </code>

                            <h2>Archivos de Configuración</h2>

                            <p>
                                Archivos como manifest.json y robots.txt suelen estar en la carpeta public.
                                manifest.json se utiliza para la configuración de Progressive Web Apps (PWA).
                                robots.txt se usa para dar instrucciones a los motores de búsqueda sobre qué partes de tu sitio pueden rastrear.
                            </p>

                            <h2>Imágenes y Medios</h2>

                            <p>
                                Cualquier imagen, fuente o archivo multimedia que coloques en la carpeta public estará disponible en la raíz de tu aplicación. Por ejemplo, un archivo public/logo.png estará disponible en https://tusitio.com/logo.png.
                            </p>

                            <h2>Favicon</h2>
                            <p>
                                Puedes colocar tu favicon en la carpeta public y referenciarlo en index.html mediante link rel="icon" href="%PUBLIC_URL%/favicon.ico".
                            </p>

                            <h1>Directorio src</h1>

                            <p>
                                En un proyecto de React creado con Create React App (CRA), la carpeta src es donde resides el código fuente de tu aplicación. Esta carpeta contiene todos los componentes, estilos y archivos que se procesarán y transpilizarán mediante Webpack para crear el paquete final de tu aplicación. Aquí hay un desglose de sus funciones y características clave:
                            </p>

                            <h2>Función de la Carpeta src</h2>

                            <h3>Contener Componentes React</h3>

                            <p>
                                Aquí es donde defines tus componentes de React, tanto funcionales como de clase.
                                Los componentes pueden estar organizados en subcarpetas para mantener el proyecto limpio y estructurado.
                            </p>

                            <h3>Almacenar Estilos y Archivos CSS/SCSS</h3>

                            <p>
                                Archivos de estilo como CSS, SCSS o cualquier otro preprocesador pueden residir aquí.
                                Puedes importar estos archivos directamente en tus componentes.
                            </p>

                            <h3>Lógica de Aplicación</h3>

                            <p>
                                Archivos que contienen la lógica de tu aplicación, como funciones utilitarias, hooks personalizados, contextos y más, se encuentran aquí.
                            </p>

                            <h3>Archivos de Configuración y Entrypoint</h3>

                            <p>
                                Contiene el punto de entrada de la aplicación, generalmente index.js o index.tsx, donde ReactDOM.render se llama para montar la aplicación en el DOM.
                                También contiene otros archivos de configuración como App.js o App.tsx que definen la estructura base de la aplicación.
                            </p>

                            <h1>Directorio node_modules</h1>

                            <p>
                                La carpeta node_modules contiene todas las dependencias del proyecto. Estas dependencias son bibliotecas y paquetes que el proyecto necesita para funcionar correctamente. La gestión de estas dependencias se realiza mediante el archivo package.json y se instala utilizando el comando npm install o yarn install.
                            </p>

                            <h2>Características de la Carpeta node_modules</h2>

                            <h3>Almacenamiento de Dependencias</h3>

                            <p>
                                Todos los paquetes especificados en las secciones dependencies y devDependencies del archivo package.json se instalan en esta carpeta.
                                También incluye todas las dependencias de las dependencias, lo que puede resultar en una estructura de directorios bastante profunda.
                            </p>

                            <h3>Gestión de Paquetes</h3>

                            <p>
                                Al utilizar npm (Node Package Manager) o Yarn, las dependencias se descargan y almacenan en node_modules.
                                npm y Yarn manejan versiones específicas de cada paquete para asegurar la consistencia del entorno de desarrollo y producción.
                            </p>

                            <h3>Optimización y Desduplicación</h3>

                            <p>
                                npm y Yarn intentan optimizar la instalación de paquetes para evitar duplicados siempre que sea posible. Sin embargo, puede haber múltiples versiones de una misma biblioteca si diferentes dependencias requieren diferentes versiones.
                            </p>

                            <h3>No Debe Versionarse</h3>

                            <p>
                                Por lo general, node_modules no se incluye en el control de versiones (como Git). En su lugar, se utiliza el archivo package-lock.json o yarn.lock para garantizar que todas las instalaciones sean consistentes en diferentes entornos.
                                El archivo .gitignore suele contener una entrada para node_modules para asegurarse de que esta carpeta no se suba al repositorio.
                            </p>

                            <h1>Descripcion de los archivos</h1>

                            <h2>index.js</h2>

                            <p>
                                Este es el punto inicial de una aplicacion react, es como el archivo que contiene
                                la funcion main de c o java, por lo general al crear una aplicacion con el comando
                                create react app suele tener la siguiente estructura
                            </p>

                            <CodeSpaceV4 title={'terminal'} rawCode={` import React from 'react';\n import ReactDOM from 'react-dom/client';\n import './index.css';\n
                                import App from './App';\n
                                import reportWebVitals from './reportWebVitals';\n

                                const root = ReactDOM.createRoot(document.getElementById('root'));\n
                                root.render(\n
                                <React.StrictMode>\n
                                <App />\n
                                </React.StrictMode>\n
                                );\n
                                reportWebVitals(); \n`} />

                            <p>
                                Este archivo suele contener la entrada inicial
                                de la libreria de react asi que no es recomendable que
                                se modifique ya que se puede simplemente cambiar el contenido
                                del archivo App.js para poder poner nuestros componentes
                                personalizados
                            </p>

                            <h2>App.js</h2>

                            <p>
                                Es un componente funcional de React que define la estructura y el contenido 
                                de la interfaz de usuario (UI). Generalmente, es el componente raíz que se 
                                renderiza dentro del DOM (Document Object Model) de la página web.
                            </p>

                            <CodeSpaceV2 title={'App.js'} 
                                rawCode={`import React from 'react';\n import './App.css';\n function App() {\n return (\n <div className="App">\n <header className="App-header">\n <h1>¡Hola, React!</h1>\n <p>Bienvenido a tu nueva aplicación creada con Create React App.</p>\n </header>\n </div>\n );\n }\n export default App;\n `} />

                            <p>
                                Este componente normalmente es el punto de partida para una aplicacion creada con 
                                la libreria react, dentro de este componente podemos montar los elementos que queramos,
                                si bien podemos modificar y agregar toda la logica que queremos a este archivo. Lo mejor 
                                es que dividamos nuestra aplicacion y la logica en diferentes componentes
                            </p>
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </>
    )
}
