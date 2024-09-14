import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";


export function SqlStandar(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Comandos de VsCode"} text={"Por Steve 13/09/2024"} />

            <DivSection>
                <DivArticle>
                    <p>
                        Cuando estudiaba base de datos pensaba que solo existia 
                        la base de datos de mysql ya que era con lo que trabaja en 
                        en ese entonces y tambien porque no sabia que eso era como 
                        otro lenguaje diferente en las bases de datos.
                    </p>
                </DivArticle>
            </DivSection>

        </>
    )
}