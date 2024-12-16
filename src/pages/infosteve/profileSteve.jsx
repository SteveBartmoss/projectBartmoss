import { useState } from "react";
import { Card, CardAccions, CardLink } from "../../componentes/card/card";
import { Chip } from "../../componentes/chips/chip";
import { DivCol, DivRow } from "../../componentes/contenedores/contenedores";
import { ProgresBar } from "../../componentes/progresbar/ProgresBar";
import { Btn } from "../../componentes/btn/Btn";
import { Modal } from "../../componentes/modal/Modal";


export function ProfileSteve() {

    const lenguajeElements = [
        {
            value: 90,
            label: "JavaScript"
        },
        {
            value: 50,
            label: "Java"
        },
        {
            value: 60,
            label: "php"
        }
    ]

    const proyectElements = [
        {
            value: 70,
            label: "UiSteve",
        },
        {
            value: 10,
            label: "Sql Steve",
        },
        {
            value: 10,
            label: "Mocha Editor"
        }
    ]

    const [openBooks, setOpenBooks] = useState(false)

    const openDetailsBooks = () => {
        setOpenBooks(true)
    }

    const closeDetailsBooks = () => {
        setOpenBooks(false)
    }

    return (
        <div>
            <Card>
                <h1>Acerca de steve</h1>
                <p>
                    Programador web fan de los temas cyberpunk,
                    sobre programacion, tecnologia y videojuegos.
                    Con la idea de poder compartir con otas personas
                    el conocimiento sobre programacion que posee
                </p>
            </Card>
            <DivCol>
                <DivRow>
                    <DivCol>
                        <Card>
                            <h1>Skills</h1>
                            <DivRow>
                                <Chip color={"principal"}>React</Chip>
                                <Chip color={"warning"}>JavaScript</Chip>
                                <Chip color={"success"}>Linux</Chip>
                            </DivRow>
                        </Card>
                        <Card>
                            <h1>Stats</h1>
                            <p>Horas de programacion: 960 </p>
                        </Card>
                        <Card>
                            <h1>Manejador de Versiones</h1>
                            <h1>Editor Favorito</h1>
                            <h1>Distribucion usada</h1>
                            <h1>Lenguaje Favorito</h1>
                        </Card>

                        <Card>
                            <h1>Lenguajes usados</h1>
                            {
                                lenguajeElements.map(item =>
                                    <ProgresBar key={item.label} title={item.label} percent={item.value} />
                                )
                            }
                        </Card>

                        <Card>
                            <h1>Libros leidos</h1>

                            <p>
                                33
                            </p>

                            <h1>Libros en proceso</h1>

                            <p>6</p>

                            <h1>Lista de espera de libros</h1>

                            <p>5</p>

                            <Btn evento={() => openDetailsBooks()} variant='' color={'principal'}>Detalles</Btn>
                        </Card>
                    </DivCol>

                    <DivCol>
                        <Card>
                            <h1>Proyectos Actuales</h1>
                            {
                                proyectElements.map(item =>
                                    <ProgresBar key={item.label} title={item.label} percent={item.value} />
                                )
                            }
                        </Card>

                        <Card>
                            <h1>Mi perfil de ytMusic</h1>
                            <p>
                                No todo se trata de programar asi
                                que de debes en cuando me gusta
                                es
                            </p>
                            <CardAccions>
                                <CardLink url={'https://music.youtube.com/channel/UCWA78kP1nB1AvCrex-VO10g?si=-TtFFostuF98o-1t'} text={'Seguir'} isBlank={true} />
                            </CardAccions>
                        </Card>

                        <Card>
                            <h1>Mi perfil de steam</h1>
                            <p>
                                No seria un buen programador
                                si no me gustara pasar parte de mi
                                tiempo libre con los videojuegos
                            </p>
                        </Card>

                        <Card>
                            <h1>Stack de lenguajes</h1>
                            <p>
                                Dart
                            </p>
                            <p>
                                Go
                            </p>
                            <p>
                                Rust
                            </p>
                        </Card>

                        <Card>
                            <h1>Stack de tecnologias</h1>
                            <p>
                                Docker
                            </p>
                            <p>
                                Nest.js
                            </p>
                            <p>
                                Mongo db
                            </p>
                        </Card>

                        <Card>
                            <h1>Stack de proyectos</h1>
                            <p>
                                Desplegar una api
                            </p>
                            <p>
                                Completar la version 1 de la Ui
                            </p>
                        </Card>
                    </DivCol>
                </DivRow>

                <Modal estado={openBooks} close={closeDetailsBooks}>
                    <Card>
                        <h1>Libros leidos</h1>
                        
                        <Btn evento={() => closeDetailsBooks()} variant='' color={'error'}>Cerrar</Btn>
                    </Card>
                </Modal>
            </DivCol>
        </div>
    )
}
