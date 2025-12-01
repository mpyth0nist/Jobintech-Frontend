export default function ProfilePosts() {
  const posts = [
    {
      id: 1,
      titre: "Mon premier article sur React",
      date: "2024-11-28",
      extrait: "Découvrez comment j'ai appris React et Redux..."
    },
    {
      id: 2,
      titre: "Guide pratique de Redux Toolkit",
      date: "2024-11-25",
      extrait: "Un guide complet pour maîtriser Redux Toolkit..."
    },
    {
      id: 3,
      titre: "Astuces pour React Router",
      date: "2024-11-20",
      extrait: "Les meilleures pratiques pour la navigation..."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Mes articles</h3>

      <div className="space-y-4">
        {posts.map(post => (
          <div 
            key={post.id}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h4 className="text-xl font-semibold text-white mb-2">{post.titre}</h4>
            <p className="text-sm text-gray-400 mb-3">{post.date}</p>
            <p className="text-gray-300">{post.extrait}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
