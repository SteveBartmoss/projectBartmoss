import { DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";

export function Home() {
    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Void Return"} 
                text={"Blog dedicado a contar la vida de un programador y algunas otras cosas interesates"} />
            <DivSection>
                <h1>Ultimos Articulos</h1>
                <p>
                    Lista de articulos XD
                </p>
            </DivSection>
        </div>
    )
}