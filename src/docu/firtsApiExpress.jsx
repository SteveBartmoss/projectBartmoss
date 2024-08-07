import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirsApiExpress() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primera API con Express"} text={"Por Steve 04/08/2024"} />
            <DivSection>
                <DivArticle>
                    <p>
                        Express es un framework para backend en node.js 
                        que permite crear una API de manera sencilla, en este 
                        arcticulo veremos como crear una de manera simple
                    </p>
                    
                    <h1>Requerimientos</h1>

                    <p>
                        Node Js instalado <br/>
                        editor de codigo <br/>
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
                </DivArticle>
            </DivSection>

        </>
    )
}
