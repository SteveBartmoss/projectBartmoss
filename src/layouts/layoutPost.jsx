import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { TreeMap } from "../componentes/treeMap/TreeMap";


export function LayoutPost({titlePortada,textPortada,titleMap,elementsMap,children}){

    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={titlePortada} text={textPortada} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={titleMap} elementos={elementsMap} />
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>
                            {children}
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}