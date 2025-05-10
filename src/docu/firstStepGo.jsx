import { DivArticle, DivCol, DivContent, DivRow } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FistStepGo(){


    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en go"} text={"Por Steve 10/05/2025"} />

            <DivRow>
                <DivCol>
                    
                </DivCol>

                <DivCol>

                    <DivArticle>
                        <DivContent>

                            <h1>Preparar ambiente para go</h1>

                            <p>
                                Para poder ejecutar go, debemos instalarlo y para esto debemos ir a la 
                                pagina oficial y dependiendo del sistema operativo seguir diferentes 
                                instrucciones
                            </p>

                            <h3>Windows</h3>

                            <h3>MacOs</h3>

                            <h3>Linux</h3>
                        </DivContent>
                    </DivArticle>
                </DivCol>
            </DivRow>
        </>
    )
}