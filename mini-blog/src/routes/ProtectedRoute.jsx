import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

export default function ProtectedRoute({children}){

    let isAuth = useSelector(state => state.auth.isAuth)
    
    let location = useLocation()
    return isAuth ? children : <Navigate to="/login" replace state={{from: location.pathname}}/>

}