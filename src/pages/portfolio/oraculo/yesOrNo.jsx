import { useState } from "react";
import { DivArticle, DivCol, DivRow, DivSection } from "../../../componentes/contenedores/contenedores";
import { TextField } from "../../../componentes/textField/TextField";
import { Btn } from "../../../componentes/btn/Btn";


export function YesOrNot(){

    const [question,setQuestion] = useState("")

    const handleChange=(event)=>{
        setQuestion(event.target.value)
    }


    return(
        <DivSection>
            <DivArticle>
                <h1>Yes Or No</h1>
                <DivRow>
                    <DivCol>
                        <TextField label={"Pregunta"} isPass={false} text={question} action={handleChange} />
                    </DivCol>
                    <DivCol>
                        <Btn>Buscar</Btn>
                    </DivCol>
                </DivRow>
                 
            </DivArticle>
        </DivSection>
    )
}