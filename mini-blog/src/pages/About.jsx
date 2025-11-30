function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 shadow-2xl">
        <h2 className="text-4xl font-bold text-white mb-6">À propos</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          L'objectif du projet Mini-Blog c'est de pratiquer les concepts,
          Théorique que nous avons vu pour la partie React Router et Redux pour les mieux maitriser.
        </p>
      </div>
    </div>
  );
}

export default About;