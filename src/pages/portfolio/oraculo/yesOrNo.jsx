import { useState } from "react";
import { DivArticle, DivSection } from "../../../componentes/contenedores/contenedores";
import { TextField } from "../../../componentes/textField/TextField";


export function YesOrNot(){

    const [question,setQuestion] = useState("")

    const handleChange=(event)=>{
        setQuestion(event.target.value)
    }


    return(
        <DivSection>
            <DivArticle>
                <h1>Yes Or No</h1>

                <TextField label={"Pregunta"} isPass={false} text={question} action={handleChange} /> 
            </DivArticle>
        </DivSection>
    )
}