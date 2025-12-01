import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

export default function Login({ onLogin }){
    let isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()


    let [email, setEmail] = useState("")
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({email: email, role: "admin" }))

        if(location.state?.from){
            navigate(location.state.from)

        }else{
            navigate("/admin")
        }

    }

    if(isAuth){
        return <Navigate to='/admin' replace />
    }else{
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6" onSubmit={handleSubmit}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Votre email.."
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    Se connecter
                </button>
                </div>
            </div>
            </div>
        );

        
    }
}