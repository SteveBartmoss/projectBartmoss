import { DivArticle, DivContent, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirstStepRedux() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en redux"} text={"Por Steve 30/11/2024"} />

            <DivArticle>
                <DivContent>
                    <p>
                        La libreria de redux es una buena opcion para manejar el estado
                        global de una aplicacion al momento de tener que manejar de una
                        forma mas eficiente y potente la informacion entre componentes
                    </p>

                    <h1>Instalacion de reduxtoolkit</h1>

                    <p>
                        Para instalar reduxtoolkit en nuestra aplicacion podemos dirigirnos
                        a la pagina oficial en el siguiente enlace
                    </p>

                    <a id="linkto" href="https://redux-toolkit.js.org/tutorials/quick-start" rel="noreferrer" target="_blank">Sitio de Node</a>

                    <p>
                        Aqui podremos encontrar el siguiente comando que nos permite instalar reduxtoolkit para nuestra
                        aplicacion de react
                    </p>

                    <p>
                        npm install @reduxjs/toolkit react-redux
                    </p>

                    <h2>Configurar el Store</h2>

                    <p>
                        Ahora que se tiene instalado redux toolkit, debemos configurar 
                        es store que sera el lugar donde almacenaremos todos los estados 
                        que queremos usar en nuestro proyecto.
                    </p>

                    <p>
                        Para esto podemos seguir la estructura que nos ofrece la 
                        documentacion de reduxtoolkit
                    </p>

                    <p>
                        src/app/store.js
                    </p>

                    <p>
                        El archivo store.js deberia tener la siguiente configuracion basica
                    </p>

                    <p>
                        import &#123; configureStore &#125; from '@reduxjs/toolkit'

                        export const store=configureStore(&#123;
                            reducer: &#123; &#125;
                        &#125;)

                        export default store

                    </p>

                    <p>
                        Dentro de este estore almacenameremos un objeto gigante, que es donde 
                        mantendremos los estados de nuestra aplacacion, pensemos en en el store 
                        como un disco duro, dentro de el podemos almacenar lo que queremos y 
                        tambien podemos recuperar la informacion desde el mismo
                    </p>

                    <h2>Proveer el estado global</h2>

                    <p>
                        Ahora que tenemos creado nuestro almacenamiento global definido, debemos 
                        conectarlo a nuestra aplicacion para poder usarlo en cualquier parte, 
                        podemos pensar en esto como conectar el disco duro a nuestra placa madre
                    </p>

                    <p>
                        Para lograr esto debemos usar un provider que cubrira toda nuestra aplicacion 
                        como si se trata de una gran etiquta
                    </p>

                    <p>
                        import React from 'react'
                        import ReactDOM from 'react-dom'
                        import './index.css'
                        import App from './App'
                        import &#123; store &#125; from './app/store'
                        import &#123; Provider &#125;

                        ReactDOM.render(
                            &lt;Provider store=&#123; store &#125; &gt;
                                &lt;App /&gt;
                            &lt;/Provider&gt;,
                            document.getElementById('root')
                        )

                        &#123; &gt; &#125;
                    </p>

                </DivContent>
            </DivArticle>
        </>
    )
}