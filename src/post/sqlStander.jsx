import { DivArticle, DivSection } from "../componentes/contenedores/contenedores";


export function SqlStandar(){
    return(
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Sql no es estandar"} text={"Por Steve 13/09/2024"} />

            <DivSection>
                <DivArticle>
                    <p>
                        Cuando estudiaba base de datos pensaba que solo existia 
                        la base de datos de mysql ya que era con lo que trabaja en 
                        en ese entonces y tambien porque no sabia que eso era como 
                        otro lenguaje diferente en las bases de datos.
                    </p>

                    <p>
                        Y si bien no es del todo cierto puedo decir que tampoco existe 
                        un estandar y es que las bases de datos relacionales no tienen 
                        sentido, ya que al aprender mysql por ejemplo pense que solo se 
                        trababa de ese tipo de base de datos pero luego descubri que 
                        slq es un estandar pero realmente de estandar no tiene nada
                    </p>
                </DivArticle>
            </DivSection>

        </>
    )
}