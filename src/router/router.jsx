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
import { DockerBasic } from "../docu/dockerBasic";
import { WhatIsGit } from "../docu/whatIsGit";
import { LinkedServer } from "../docu/linkedServer";
import { VsCodeHack } from "../docu/VsCodeHack";
import { YesOrNot } from "../pages/portfolio/oraculo/yesOrNo";
import { FindGif } from "../pages/portfolio/findGif/findGif";
import { Vimgg } from "../docu/vimgg";
import { BasicLinux } from "../docu/BasicLinux";
import { MainRoad } from "../pages/mainRoad";
import { RoadMapJs } from "../roadmap/javaScript/roadMapJs";


export function RouterBlog(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="steve" element={<Steve />} />
                <Route path="docu" element={<Docu />} />
                <Route path="roadmap" element={<MainRoad />} />
                <Route path="docu/primerospasos" element={<FirstStepReact /> } />
                <Route path="docu/hookcontext" element={<HookContext /> } />
                <Route path="docu/fkvelocidad" element={<FkAndIndex />} />
                <Route path="docu/pretycommits" element={<PretyCommits />} />
                <Route path="docu/compositor" element={<Compositor />} />
                <Route path="docu/mejorardebian" element={<FirstStepDebian />} />
                <Route path="docu/basicDocker" element={<DockerBasic />} />
                <Route path="docu/whatisgit" element={<WhatIsGit />} />
                <Route path="docu/linkedserver" element={<LinkedServer />} />
                <Route path="docu/hackvscode" element={<VsCodeHack />} />
                <Route path="docu/basiclinux" element={<BasicLinux />} />
                <Route path="docu/vimgg" element={<Vimgg />} />

                <Route path="steve/desconectado" element={<DesconectadoLife />} />
                <Route path="steve/pilasinfin" element={<PilaSinFin />} />
                <Route path="steve/pimpterminal" element={<PimpTerminal />} />
                <Route path="steve/mascomplejo" element={<MasComplejo/>} />

                <Route path="portfolio/yesornot" element={<YesOrNot />}/> 
                <Route path="portfolio/findgif" element={<FindGif />} />

                <Route path="roadmap/javascript" element={<RoadMapJs />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}