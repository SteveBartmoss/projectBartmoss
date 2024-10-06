import { useState } from "react";
import { DivArticle, DivCol, DivRow, DivSection } from "../../../componentes/contenedores/contenedores";
import { TextField } from "../../../componentes/textField/TextField";
import { Btn } from "../../../componentes/btn/Btn";
import { getOracle } from "../helpers/api";
import './yesOrNo.css'

export function YesOrNot() {

    const [question, setQuestion] = useState("")
    const [repondeApi, setResponseApi] = useState('')
    const [objResponse, setObjResponse] = useState("")

    const handleChange = (event) => {
        setQuestion(event.target.value)
    }

    const sendQuestion = async () => {
        setObjResponse(null)
        let info = await getOracle()
        setObjResponse({
            title: question,
            response: info.answer,
            img: info.image
        })
        setQuestion("")
    }


    return (
        <DivSection>
            <DivArticle>
                <div className="div-center">
                    <h1>Yes Or No</h1>
                </div>
                <div className="div-elements">
                    <div>
                        <TextField label={"Pregunta"} isPass={false} text={question} action={handleChange} />
                    </div>
                    <div className="div-component">
                        <Btn evento={sendQuestion} >Preguntar</Btn>
                    </div>
                </div>

                {
                    objResponse && (
                        <>
                            <div className="div-center">
                                <h1>{objResponse?.title}</h1>

                                <h1>{objResponse?.response}</h1>

                                <img className="img-response" src={objResponse.img} />
                            </div>

                        </>
                    )
                }

            </DivArticle>
            <div className="div-center">
                <h1>Power by <a id="linkto" className="uisteve" href="https://uisteve.netlify.app/" rel="noreferrer" target="_blank">Ui Steve</a></h1>
            </div>
        </DivSection>
    )
}