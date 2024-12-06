import { DivArticle, DivContent } from "../../componentes/contenedores/contenedores";
import { Portada } from "../../componentes/portada/portada";


export function AxiosMap(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Axios"} text={"Por Steve 06/12/2024"} />

            <DivArticle>
                <DivContent>
                    
                </DivContent>
            </DivArticle>
        </>
    )
}