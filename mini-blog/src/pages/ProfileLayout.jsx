import { Outlet, useNavigate } from "react-router-dom"


export default function ProfileLayout(){

    const navigate = useNavigate()
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl mb-6">
          <h2 className="text-3xl font-bold text-white mb-6">Bienvenue sur votre profile.</h2>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('info')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Infos
            </button>
            <button 
              onClick={() => navigate('posts')}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Posts
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}