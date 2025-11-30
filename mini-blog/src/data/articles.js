export const articles = [
  {
    id: 1,
    titre: "Introduction à React Router",
    contenu:
      "React Router est une bibliothèque essentielle pour gérer la navigation dans les applications React. Dans cet article, nous découvrons comment fonctionnent les routes, les composants clés comme BrowserRouter, Routes et Route, ainsi que les bases nécessaires pour démarrer.",
  },
  {
    id: 2,
    titre: "Comprendre les routes dynamiques",
    contenu:
      "Les routes dynamiques permettent d'afficher des pages basées sur un paramètre dans l'URL, comme un ID d’article. Dans ce guide, nous explorons useParams, la structure des routes imbriquées, et les best practices pour organiser vos composants.",
  },
  {
    id: 3,
    titre: "Créer un Layout avec Outlet",
    contenu:
      "Les layouts jouent un rôle central dans les applications multi-pages. Grâce à <Outlet />, on peut afficher des sous-routes à l'intérieur d'un layout parent. Cet article explique comment créer une structure cohérente, réutilisable et évolutive.",
  },
  {
    id: 4,
    titre: "Navigation programmée avec useNavigate",
    contenu:
      "useNavigate permet de naviguer dans votre application via du code JavaScript, sans cliquer sur un lien. Très utile après la soumission d’un formulaire ou une action utilisateur. Nous verrons des exemples concrets et des astuces avancées.",
  },
  {
    id: 5,
    titre: "Les routes protégées en React Router",
    contenu:
      "Protéger certaines pages comme un dashboard admin est une fonctionnalité essentielle. On explore ici comment créer un composant ProtectedRoute, rediriger vers /login en cas d’accès non autorisé, et structurer l’authentification dans l’application.",
  },
];
