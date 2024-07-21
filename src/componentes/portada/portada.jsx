import './portada.css';
import { DivCol, DivRow } from "../contenedores/contenedores";

export function Portada({imgPortada, title, text}){
    return(
        <section className="portada">
            <DivRow>
                <div className="frame-img">
                    <img alt="imgPerfil" className="img-portada" src={imgPortada} /> 
                </div>
                <DivCol>
                    <h1 className="title-portada">{title}</h1>
                    <p className="text-portada">{text}</p>
                </DivCol>
            </DivRow>
        </section>
    )
}