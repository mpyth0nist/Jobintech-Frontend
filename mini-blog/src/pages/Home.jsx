import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = () => {}; // placeholder

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Bienvenue sur le{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Mini-Blog
          </span>
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          Un projet pour pratiquer les concepts de React router et Redux Toolkit
        </p>

        <button
          onClick={() => navigate('articles')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Voir les articles
        </button>
      </div>
    </div>
  );
}

export default Home;