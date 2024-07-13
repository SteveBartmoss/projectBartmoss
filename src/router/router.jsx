import { BrowserRouter, Routes } from "react-router-dom";
import { NavBar } from "../componentes/navbar/navBar";


export function RoterBlog(){
    return(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    )
}