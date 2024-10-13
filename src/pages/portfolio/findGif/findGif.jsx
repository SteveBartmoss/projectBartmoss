import { Btn } from "../../../componentes/btn/Btn";
import { DivArticle, DivSection } from "../../../componentes/contenedores/contenedores";
import { TextField } from "../../../componentes/textField/TextField";
import './findGif.css'

export function FindGif() {
    return (
        <>
            <DivSection>
                <DivArticle>
                    <div className="div-center">
                        <h1>Find gifs</h1>
                    </div>
                    <div>
                        <div>
                            <TextField />
                        </div>
                        <div>
                            <Btn>Buscar</Btn>
                        </div>
                    </div>
                </DivArticle>
            </DivSection>
        </>
    )
}