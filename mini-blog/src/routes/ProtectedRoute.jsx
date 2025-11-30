import { Navigate, useLocation } from "react-router-dom"

function ProtectedRoute({isAuth, children}){
    let location = useLocation()
    return isAuth ? children : <Navigate to="/login" replace state={{from: location.pathname}}/>

}