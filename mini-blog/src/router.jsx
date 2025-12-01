import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import ArticleComments from "./pages/ArticleComments";
import ProtectedRoute from "./routes/ProtectedRoute";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import EditorPage from "./pages/EditorPage";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import Help from "./pages/Help";
import ProfileLayout from "./pages/ProfileLayout";
import ProfileInfo from "./pages/ProfileInfos";
import ProfilePosts from "./pages/ProfilePosts";


function AppRoutes(){
    const userRole = useSelector(state => state.auth.userRole)

    useEffect(() => {
        console.log(userRole)
    }, [userRole])

    return(
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="admin" element={<ProtectedRoute >
                        <Admin />
                    </ProtectedRoute>} />
                    <Route path="login" element={<Login />} />
                    <Route path="editor" element={
                        userRole === "editor" || userRole === "admin" ? 

                            <EditorPage />
                            : 
                            <Navigate to="/" state={{ sucessMessage: "Accès refusé"}} />
                    
                        
                    } />
                    <Route path="profile" element={<ProfileLayout/>} >

                        <Route path="info" element={<ProfileInfo />} />

                        <Route path="posts" element={<ProfilePosts />} />
                    
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="help" element={<Help />} />
                    <Route path="articles" element={<Articles />}>
                    <Route index element={<p className="text-white font-bold text-xl">Selectionnez un article</p>} />
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