import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { LayoutPost } from "../layouts/layoutPost";


export function FirsApiExpress() {
    return (
        <>
            <LayoutPost titlePortada={"Primera API con Express"} textPortada={"Por Steve 04/08/2024"} titleMap={'Mapa del sitio'} elementsMap={pageMap}>

                <p>
                    Express es un framework para backend en node.js
                    que permite crear una API de manera sencilla, en este
                    arcticulo veremos como crear una de manera simple
                </p>

                <h1>Requerimientos</h1>

                <p>
                    Node Js instalado <br />
                    editor de codigo <br />
                    acceso a datos
                </p>

                <h1>Primeros pasos</h1>

                <p>
                    Lo primero que tenemos que hacer es inicializar la apliacion
                    de node, lo cual podemos hacer con el siguiente comando:
                </p>

                <code>npm init -y</code>

                <p>
                    Esto nos inicializa la aplicacion al crear un package.json con
                    la estructura basica, si se omite la opcion -y en el comando
                    de igual manera se inicializa la aplicacion pero tendremos
                    que responder una serie de preguntas
                </p>

                <p>
                    Ahora debemos instalar express que es el framework que nos permitira
                    crear todo lo realcionado con la api, podemos usar el siguiente comando:
                </p>

                <code>npm i express</code>

                <p>
                    Ahora que tenemos instalado express podemos crear nuestro archivos
                    index.js que sera el punto de inicio de nuestra api, el archivo debe estar
                    en la raiz del proyecto o en otras palabras debe estar al mismo nivel que
                    los archivos package.json
                </p>

                <p>
                    En el archivo index.js podemos agregar la siguiente linea de codigo:
                </p>

                <code>import express from 'express'</code>

                <p>
                    Algo importante es que esta sintaxis es de ecma script o en teoria
                    es de la sixtasis moderna de javascript asi que tenemos que hacer
                    un cambio para poder usar esta sintaxis
                </p>

                <p>
                    Debemos ir a nuestro archivo package.json y agregar la siguiente propiedad
                    en el objeto json:
                </p>

                <code>"type": "module",</code>

                <p>
                    Esto le indicara a node js que debe trabar con la sintaxis moderla de
                    js y permitira ejecutar el contenido de index.js, si ejecutamos el contenido
                    sin agregar la propiedad al json entonces no saldra un error
                </p>

                <p>
                    Ahora podemos levantar el servidor de la api con el siguiente
                    codigo agregado a index.js:
                </p>

                <code>
                    const app = express()

                    app.listen(3300)
                </code>

                <p>
                    Esto nos levanta un servidor que escucha el puesto 3300 asi que ya
                    tenemos el servidor iniciado pero hay otra configuracion que se tiene
                    que hacer y es instalar nodemon
                </p>

                <p>
                    El uso de nodemon es necesario porque la configuracion actual del proyecto no
                    detecta los cambios y los ejecuta en el mismo instante, nodemon no ayuda a
                    que detecte cambios en el proyecto y a volvel a ejecutar la aplicacion cada
                    que esto pasa, asi que no es necesario hacer lo anterior de manera manual
                </p>

                <p>
                    Para instalar nodemon es tan simple como usar el siguiente comando:
                </p>

                <code>npm install nodemon </code>
            </LayoutPost>

        </>
    )
}
