import { Card, CardAccions, CardLink } from "../../componentes/card/card";
import { DivSection } from "../../componentes/contenedores/contenedores";


export function PostSteve() {
    return (
        <>
            
            <DivSection>

                <Card size={30}>
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

                <Card size={30}>
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

                <Card size={30}>
                    <h1>Pimp my Terminal</h1>
                    <p>
                        Trabajar en una terminal no te obliga
                        a tener que ser aburrido
                    </p>
                    <CardAccions>
                        <CardLink url={'pimpterminal'} text={'Ir al articulo'} />
                    </CardAccions>
                </Card>

                <Card size={30}>
                    <h1>Haslo tu mismo</h1>
                    <p>
                        No te agrada un programa, entonces haslo
                        tu mismo
                    </p>
                    <CardAccions>
                        <CardLink url={'mascomplejo'} text={'Ir al articulo'} />
                    </CardAccions>
                </Card>
            </DivSection>
        </>
    )
}