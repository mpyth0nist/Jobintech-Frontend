import { Link, Outlet } from "react-router-dom"
import { articles } from "../data/articles"

export default function Articles(){





    return(
        <>
            <div>
                <ul>
                    { articles.map(article => {
                        return <li><Link to="/articles/{id}">{article.titre}</Link></li>
                    })}
                </ul>
            

            <div>
                <Outlet />
            </div>
            </div>
        
        </>
    )
}