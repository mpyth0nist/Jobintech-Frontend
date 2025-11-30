import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { articles } from "../data/articles";
import { Link } from "react-router-dom";

export default function Article(){

    const { id } = useParams()


    const allArticles = articles

    let selectedArticle = allArticles.filter(article => article.id === Number(id))[0]

    let isLong = selectedArticle?.contenu.length

    let [showLong, setShowLong] = useState(false)
    
    const navigate = useNavigate()

    return (
        <>
        {selectedArticle ? 

            <article>
                
                <h2 className="text-white text-2xl font-bold ">{selectedArticle.titre}</h2>

                <div></div>

                {
                    isLong && !showLong ? 
                    <div>
                        <p className="text-white text-lg m-[1em] text-left">{selectedArticle.contenu.slice(0,150)} ... <span className="font-bold cursor-pointer" onClick={() => setShowLong(true)}>Lire Plus</span></p>
                        
                    </div>
                    
                    :
                    <>
                    <p className="text-white text-lg m-[1em] text-left">{selectedArticle.contenu}
                                        {
                        showLong ?
                        <span className="font-bold text-white text-lg text-left ml-[0.7em] cursor-pointer" onClick={() => setShowLong(false)}>Lire Moins</span>
                        :

                        null

                    }
                    </p>
                    


                    </>
                }

                <button className="text-white text-lg p-[0.7em] bg-violet-700 rounded-full hover:bg-violet-900 hover:scale-120 cursor-pointer duration-500 " onClick={() => navigate(`comments`)}>View Comments</button>

            </article>


            :
            <div>
                <h2>Article Introuvable</h2>
                <button onClick={() => navigate('/articles', {replace: true})}>Retour aux articles</button>
            </div>

        }
        </>
    )



}