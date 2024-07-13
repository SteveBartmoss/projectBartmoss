import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../componentes/navbar/navBar";
import { Home } from "../pages/home";
import { Footer } from "../componentes/footer/footer";
import { Steve } from "../pages/steve";


export function RouterBlog(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="steve" element={<Steve />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}