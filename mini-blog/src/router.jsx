import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function AppRoutes(){

    return(
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>


    )
}

export default AppRoutes;