import { useEffect, useState } from "react";
import { Card, CardAccions, CardLink } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivSection, DivTopicos } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { useApp } from "../context/contextApp";
import { TextField } from "../componentes/textField/TextField";
import { Btn } from "../componentes/btn/Btn";

export function Docu() {

    const [textSearch, setTextSearch] = useState("")

    const [dataDocu, setDataDocu] = useState(null)
    const [filterDocu, setFilterDocu] = useState(null)

    const handleChange = (event) => {
        setTextSearch(event.target.value)
    }

    const filterArticles = () => {
        setDataDocu(filterDocu)
        if (textSearch.trim().length !== 0) {
            setDataDocu(dataDocu.filter((element) => element.titulo.includes(textSearch)))
        }
    }

    const { isDarkTheme } = useApp()

    useEffect(() => {
        fetch('/data/docuArticles.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setDataDocu(jsonData)
                setFilterDocu(jsonData)
            })
            .catch((error) => console.log('Error: ', error))
    }, [])

    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"}
                title={"La guia del internet"}
                text={"Por Steve Bartmoss"} />
            <DivSection>
                <DivTopicos>
                    <div className="div-elements">
                        <div>
                            <TextField label={"buscar"} isPass={false} text={textSearch} action={handleChange} />
                        </div>
                        <div className="div-component">
                            <Btn evento={filterArticles} color="principal" >Buscar</Btn>
                        </div>
                    </div>
                </DivTopicos>
                <DivTopicos>
                    {
                        dataDocu && Array.isArray(dataDocu) ? (
                            dataDocu.map((item, index) =>
                                <Card size={30} key={index}>
                                    <h1>{item.titulo}</h1>
                                    <p>{item.descripcion}</p>
                                    {
                                        item.topico.map(topic =>
                                            <Chip key={index} color="warning">{topic}</Chip>
                                        )
                                    }
                                    <CardAccions>
                                        <CardLink url={item.url} text={'Ir al articulo'} />
                                    </CardAccions>
                                </Card>
                            )
                        ) : (
                            <p>Cargando informacion ...</p>
                        )
                    }
                </DivTopicos>
            </DivSection>
        </div>
    )
}
