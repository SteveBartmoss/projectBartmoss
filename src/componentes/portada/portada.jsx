import './portada.css';
import { DivCol, DivRow } from "../contenedores/contenedores";

export function Portada({imgPortada}){
    return(
        <section className="portada">
            <DivRow>
                <div className="frame-img">
                    <img alt="imgPerfil" className="img-portada" src="/Assets/steveBartmoss.jpg" /> 
                </div>
                <DivCol>
                    <h1 className="title-portada">Steve Bartmoss</h1>
                    <p className="text-portada">No le preguntes a la documentacion pregutame a mi</p>
                </DivCol>
            </DivRow>
        </section>
    )
}