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
                </DivArticle>
            </DivSection>

        </>
    )
}