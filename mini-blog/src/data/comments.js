export const comments = {
  1: [
    {
      id: "c1-1",
      auteur: "Alex_Dev",
      date: "2025-10-20",
      texte: "Excellent article pour commencer avec React Router ! J'avais du mal à comprendre la différence entre BrowserRouter et HashRouter, mais c'est très clair maintenant.",
    },
    {
      id: "c1-2",
      auteur: "Marie_Code",
      date: "2025-10-21",
      texte: "Petite question : comment gère-t-on le `404 - Page Not Found` ? Doit-on mettre une `Route` spéciale à la fin ?",
    },
    {
      id: "c1-3",
      auteur: "ReactFan",
      date: "2025-10-21",
      texte: "Très bon rappel des bases. Pour ceux qui veulent aller plus loin, je recommande de regarder les *loaders* de la dernière version.",
    },
  ],
  2: [
    {
      id: "c2-1",
      auteur: "Leo_Coder",
      date: "2025-10-25",
      texte: "Super explication sur `useParams`. J'utilise souvent la déstructuration pour récupérer l'ID, c'est tellement plus propre.",
    },
    {
      id: "c2-2",
      auteur: "Anna_Web",
      date: "2025-10-26",
      texte: "J'aimerais bien un exemple sur comment gérer le cas où l'ID n'existe pas (par exemple, si l'utilisateur entre un ID au hasard dans l'URL). Un `if (!article)` avec une redirection ?",
    },
  ],
  3: [
    {
      id: "c3-1",
      auteur: "Max_Design",
      date: "2025-10-28",
      texte: "Le concept de Layout avec `<Outlet />` a changé ma vie ! C'est la meilleure façon de gérer le Header/Footer sans duplication.",
    },
    {
      id: "c3-2",
      auteur: "Sara_Front",
      date: "2025-10-29",
      texte: "Très utile ! J'ai appliqué ça pour créer une structure de dashboard avec une barre latérale fixe, et ça fonctionne parfaitement.",
    },
  ],
  4: [
    {
      id: "c4-1",
      auteur: "TechGuru",
      date: "2025-11-02",
      texte: "`useNavigate` est un *must-have*. Un petit ajout serait d'expliquer comment passer un *state* via la navigation (par exemple, un message de succès après un enregistrement).",
    },
  ],
  5: [
    {
      id: "c5-1",
      auteur: "Security_Maniac",
      date: "2025-11-05",
      texte: "Les routes protégées sont cruciales. Il faut toujours s'assurer que la logique de protection n'est pas uniquement côté client, mais aussi côté serveur pour la vraie sécurité !",
    },
    {
      id: "c5-2",
      auteur: "Jules_React",
      date: "2025-11-06",
      texte: "Article très clair sur l'implémentation de `ProtectedRoute`. Je préfère personnellement utiliser un contexte global pour l'état d'authentification.",
    },
  ],
};