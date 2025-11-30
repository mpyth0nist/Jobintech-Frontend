import { Link, Outlet } from "react-router-dom"
import { articles } from "../data/articles"

export default function Articles(){





    return(
        <>
            <div className="min-h-screen px-4 py-12">
            <div className="ml-[5em] mx-auto flex justify-items-start">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl mb-8 mr-[1em]">
                <ul className="space-y-3 w-[300px]" >
                    {articles.map(article => (
                    <li key={article.id}>
                        <a
                        href={`/articles/${article.id}`}
                        className="block px-5 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-200 hover:translate-x-1"
                        >
                        {article.titre}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm w-3xl max-h-min border border-white/10 rounded-2xl p-8 shadow-2xl ">
                <Outlet />
                </div>
            </div>
            </div>
    </>
    )
}