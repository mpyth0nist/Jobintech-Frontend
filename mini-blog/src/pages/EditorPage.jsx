import { useDispatch } from "react-redux"
import { logout } from "../features/auth/authSlice"

export default function EditorPage(){
    const dispatch = useDispatch()
    return (
        <>
        <h3 className="text-white text-xl font-bold">Vous avez l'acces a cette page</h3>
        <p className="text-white text-md">Cette page est protégée, seuls les admins ou les editeurs pouvent l'accéder.</p>
        <button onClick={() => dispatch(logout())}>Se deconnecter</button>
        
        </>
    )
}