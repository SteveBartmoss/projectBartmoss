import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Divider } from "../componentes/divider/Divider";
import { Portada } from "../componentes/portada/portada";
import { TreeMap } from "../componentes/treeMap/TreeMap";


export function NotFound(){

    const pageMap=[
        {
            id: 1,
            section: '404',
            childs: [
                {
                    titulo: 'Pagina no encontrada',
                    id: '404',
                }
            ]
        }
    ]
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"404"} text={"Parece que lo que estas buscando esta en otro castillo"} />

            <DivRow>
                <DivCol>
                    <TreeMap titulo={'Contenido del sitio'} elementos={pageMap} />
                </DivCol>
                <DivCol>
                    <DivArticle>
                        <DivContent>

                            <h1 id='404'>Pagina no encontrada</h1>
                            
                            <Divider />

                            <p>
                                Puede que lo buscas no existe (aun) pero no te desanimes quisas pronto la pagina se actualice con lo que 
                                estas buscando o puede que nunca se agregue, quien sabe pero por el momento porque no te relajas y 
                                vuelves al chum
                            </p>

                            <a id="linkto" href="/" >Volver al inicio</a>

                            <p>
                                Hasta la proxima
                            </p>


                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>

        </>
    )
}