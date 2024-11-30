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
                </DivContent>
            </DivSection>
        </>
    )
}