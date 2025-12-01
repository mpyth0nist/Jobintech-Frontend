import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/auth/authSlice"



export default function Admin(){

    const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 shadow-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-white">Admin Dashboard</h1>

        <p className="text-xl font-bold text-white">Cette zone est protégée.</p>

        <button 
          className="px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300 hover:scale-105 active:scale-95" 
          onClick={() => dispatch(logout())}
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );

}