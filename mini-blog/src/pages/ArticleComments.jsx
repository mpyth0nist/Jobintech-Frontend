import { useNavigate, useParams } from "react-router-dom"
import { comments } from "../data/comments"

export default function ArticleComments(){

    const { id } = useParams()
    const navigate = useNavigate()
    const articleComments = comments[Number(id)]
    
    return (
        <div className="space-y-4">
            <button className="text-white text-sm font-bold hover:bg-violet-900 duration-500 cursor-pointer border rounded-full bg-violet-700 p-[0.7em]" onClick={() => navigate(-1)}>Back to article</button>
            {articleComments || articleComments.length > 1 ? 
            articleComments.map((comment, index) => (
            <div 
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200"
            >
            <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-white">{comment.auteur}</p>
                <p className="text-sm text-gray-400">{comment.date}</p>
            </div>
            <div className="h-px bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent mb-3"></div>
            <p className="text-gray-300 leading-relaxed">{comment.texte}</p>
            </div>
        ))
        :

        
        <h3>Aucun Commentaire pour l'instant.</h3>

        
        }
        </div>
    );

}