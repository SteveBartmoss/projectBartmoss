import { useEffect, useState } from "react";
import { Card, CardAccions, CardLink, CardText, CardTitle } from "../componentes/card/card";
import { Chip } from "../componentes/chips/chip";
import { DivCol, DivRow, DivSection, DivTopicos } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";
import { useApp } from "../context/contextApp";
import { TextField } from "../componentes/textField/TextField";
import { Btn } from "../componentes/btn/Btn";

export function Docu() {

    const [textSearch,setTextSearch] = useState("")

    const handleChange=(event)=>{
        setTextSearch(event.target.value)
    }

    const filterArticles=()=>{
        setDataDocu(dataDocu.filter((element)=> element.titulo.includes(textSearch) ))
        console.log(textSearch)
    }

    const [dataDocu,setDataDocu]=useState(null)

    const { isDarkTheme } = useApp()

    useEffect(()=>{
        fetch('/data/docuArticles.json')
            .then((response) => response.json())
            .then((jsonData) => setDataDocu(jsonData))
            .catch((error) => console.log('Error: ', error))
    },[])

    return (
        <div>
            <Portada imgPortada={"/Assets/steveA.png"}
                title={"La guia del internet"}
                text={"Por Steve Bartmoss"} />
            <DivSection>
                <DivTopicos>
                    <DivRow>
                        <DivCol>
                            <TextField label={"buscar"} isPass={false} text={textSearch} action={handleChange} />
                        </DivCol>
                        <DivCol>
                            <Btn evento={filterArticles} color="principal" >Buscar</Btn>
                        </DivCol>
                    </DivRow>
                </DivTopicos>
                <DivTopicos>
                    {
                        dataDocu && Array.isArray(dataDocu) ? (
                            dataDocu.map((item,index) =>
                                <Card key={index}>
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
