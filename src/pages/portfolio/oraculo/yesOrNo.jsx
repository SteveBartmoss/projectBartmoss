import { useState } from "react";
import { DivArticle, DivCol, DivRow, DivSection } from "../../../componentes/contenedores/contenedores";
import { TextField } from "../../../componentes/textField/TextField";
import { Btn } from "../../../componentes/btn/Btn";
import { getOracle } from "../helpers/api";


export function YesOrNot(){

    const [question,setQuestion] = useState("")
    const [repondeApi,setResponseApi]=useState('')

    const handleChange=(event)=>{
        setQuestion(event.target.value)
    }

    const sendQuestion=async()=>{
        //console.log(question)
        let info = await getOracle()
        console.log(info)
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
                        <Btn evento={sendQuestion} >Buscar</Btn>
                    </DivCol>
                </DivRow>
                 
            </DivArticle>
        </DivSection>
    )
}