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
import { PretyCommits } from "../docu/pretyComits";
import { PilaSinFin } from "../post/pilaSinFin";
import { Compositor } from "../docu/compositor";
import { PimpTerminal } from "../post/pimpTerminal";
import { FirstStepDebian } from "../docu/firstStepDebian";
import { MasComplejo } from "../post/masComplejo";


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
                <Route path="docu/pretycommits" element={<PretyCommits />} />
                <Route path="docu/compositor" element={<Compositor />} />
                <Route path="docu/mejorardebian" element={<FirstStepDebian />} />

                <Route path="steve/desconectado" element={<DesconectadoLife />} />
                <Route path="steve/pilasinfin" element={<PilaSinFin />} />
                <Route path="steve/pimpterminal" element={<PimpTerminal />} />
                <Route path="steve/mascomplejo" element={<MasComplejo/>} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}