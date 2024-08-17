import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../componentes/navbar/navBar";
import { Home } from "../pages/home";
import { Footer } from "../componentes/footer/footer";
import { Steve } from "../pages/steve";
import { Docu } from "../pages/docu";
import { FirstStepReact } from "../docu/firstStepReact";
import { HookContext } from "../docu/hookContext";
import { DesconectadoLife } from "../post/desconectado";
import { FkAndIndex } from "../docu/llavesIndices";


export function RouterBlog(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="steve" element={<Steve />} />
                <Route path="docu" element={<Docu />} />
                <Route path="docu/primerospasos" element={<FirstStepReact /> } />
                <Route path="docu/hookcontext" element={<HookContext /> } />
                <Route path="docu/fkvelocidad" element={<FkAndIndex />} />
                <Route path="post/desconectado" element={<DesconectadoLife />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}