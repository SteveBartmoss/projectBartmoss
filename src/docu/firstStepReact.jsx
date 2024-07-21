import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirstStepReact() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveBartmoss.jpg"} title={"Primeros pasos en react"} text={"Por Steve 21/07/2024"} />
            <DivSection>
                <DivArticle>
                    <p className="content-article">
                        La libreria de react es una gran herramienta
                        para crear sitios web y aplicaciones de una
                        manera simple y rapida, es una herramienta creada
                        por facebook y ahora tiene una gran comunidad que
                        hacen que sea una buena opcion para empezar.
                    </p>

                    <h1 className="title-article">Antes de empezar</h1>

                    <p className="content-article">
                        Para poder desarrollar aplicaciones en react es necesario
                        tener los siguientes elementos
                    </p>
                    <p>
                        Node.js <br />
                        Editor de codigo <br />
                        Terminal <br />
                    </p>

                    <h1 className="title-article">Instalar Node</h1>

                    <h2>Windos/MacOs</h2>

                    <p className="content-article">
                        En caso de tener un sistema operativo como
                        windows o macOs es bastante simple pues solo
                        tenemos que dirigirnos a la pagina oficial de
                        node js y seleccionar la verson del instalador que
                        necesitamos
                    </p>

                    <a href="https://nodejs.org/en/download/prebuilt-installer" target="_blank">Sitio de Node</a>

                    <h2>Linux</h2>

                    <p className="content-article">
                        En el caso de linux el camino no siempre es facil pero
                        como suelen decir el camino asi es, afortunadamente
                        existen formas simples de hacer esto y ahora lo veremos
                    </p>

                    <h3>Usando nvm</h3>

                    <p className="content-article">
                        Para esto debemos instalar nvm que es un manejador
                        de versiones de node, el cual es una muy buena herramienta
                        ya que permite administrar diferentes versiones de
                        node sin tener que mover tantos archivos
                    </p>

                    <p className="content-article">
                        Para instalar nvm se puede usar el siguiente codigo en
                        la terminal
                    </p>

                    <code>
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
                    </code>

                    <p className="content-article">
                        Una vez que ejecutemos el comando simplemente tenemos que
                        cerrar y abrir una nueva terminal para que se vean
                        reflejados los cambios
                    </p>

                    <p className="content-article">
                        Se puede compronar que tenemos instalada la herramienta
                        con el siguiente comando:
                    </p>

                    <code>
                        nvm --version
                    </code>

                    <p className="content-article">
                        Esto nos arroja la version de la herramienta y si no sale
                        en pantalla una serie de numeros entonces podemos seguir con
                        el siguiente comando para instalar node js:
                    </p>

                    <code>
                        nvm install 14.4.0
                    </code>

                    <p className="content-article">
                        Con esto tenemos instalada la version 14.4.0 de node js,
                        este comando instala la version de node que especifiquemos
                        asi que basta con cambiemos el numero de version en el
                        comando para instalar otra version
                    </p>

                    <p className="content-article">
                        Estos otros comandos puden ser utiles si se esta usando
                        la herramienta nvm
                    </p>

                    <p className="content-article">
                        Cambiar de version que se esta usando
                    </p>

                    <code>
                        nvm use número de versión
                    </code>

                    <p className="content-article">
                        Listar las versiones de node que tenemos instaladas
                    </p>

                    <code>
                        nvm ls
                    </code>

                    <h3>Instalando Nodesource</h3>

                    <p className="content-article">
                        Esto tambien permite instalar node pero usando otra
                        herramienta que es Nodesource lo cual podemos
                        hacer con el siguiente comando
                    </p>

                    <code>
                        curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
                    </code>

                    <p className="content-article">
                        En este caso indicamos que la version es la 14 pues tenemos
                        setup_14.x pero podemos cambiar el numero por que queremos
                        instalar. Ya que hemos hecho esto podemos ejecutar los
                        siguientes comando para instalar node
                    </p>

                    <code>
                        sudo apt-get install -y nodejs
                    </code>

                    <h1>Editor de codigo</h1>

                    <p className="content-article">
                        El editor de codigo que suelo usar es vscode el cual tambien es facil
                        de instalar y que se puede obtener en el siguiente enlace
                    </p>

                    <a href="https://code.visualstudio.com/Download" target="_blank">vs Code</a>

                    <p className="content-article">
                        Si ya tienes otro editor de codigo preferido se puede usar 
                        cualquier otro que sea de tu agrado
                    </p>
                </DivArticle>
            </DivSection>
        </>
    )
}