import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "../componentes/navbar/navBar";
import { Home } from "../pages/home";
import { Footer } from "../componentes/footer/footer";


export function RouterBlog(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}