import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../componentes/navbar/navBar";
import { Home } from "../pages/home";
import { Footer } from "../componentes/footer/footer";
import { Steve } from "../pages/steve";
import { Docu } from "../pages/docu";


export function RouterBlog(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="steve" element={<Steve />} />
                <Route path="docu" element={<Docu />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}