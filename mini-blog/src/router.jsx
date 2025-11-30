import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import ArticleComments from "./pages/ArticleComments";

function AppRoutes(){

    return(
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />

                    <Route path="articles" element={<Articles />}>
                    <Route index element={<p>Selectionnez un article</p>} />
                    <Route path=":id" element={<Article />} />
                    <Route path=":id/comments" element={<ArticleComments /> } />
                    <Route path="*" element={<p>Section Articles: Page Introuvable</p>}/>                    
                    
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>


    )
}

export default AppRoutes;