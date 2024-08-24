import { Card, CardAccions, CardLink } from "../../componentes/card/card";
import { DivSection, DivTopicos } from "../../componentes/contenedores/contenedores";


export function PostSteve() {
    return (
        <div>
            <DivSection>
                <DivTopicos>
                    <Card>
                        <h1>Estado Desconectado</h1>
                        <p>
                            Dejar la redes fue algo interesante
                            pero no es como lo pintaban o al menos
                            no lo fue para mi
                        </p>
                        <CardAccions>
                            <CardLink url={'desconectado'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>

                    <Card>
                        <h1>Pila sin fin</h1>
                        <p>
                            La tecnologia parese no tener 
                            fin y continuamente salen 
                            mas cosas que aprender
                        </p>
                        <CardAccions>
                            <CardLink url={'pilasinfin'} text={'Ir al articulo'} />
                        </CardAccions>
                    </Card>
                </DivTopicos>
            </DivSection>
        </div>
    )
}