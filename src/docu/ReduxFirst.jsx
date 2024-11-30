import { DivArticle, DivContent, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirstStepRedux(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en redux"} text={"Por Steve 30/11/2024"} />

            <DivSection>
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
                </DivContent>
            </DivSection>
        </>
    )
}