import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact(){
    const navigate = useNavigate()
    let [message, setMessage] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault()

        navigate("/")


    }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
        <div className="space-y-6" onSubmit={handleSubmit}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message ici.."
            rows="8"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;