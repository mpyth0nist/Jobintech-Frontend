import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "About" },
    { to: "/articles", label: "Articles" },
    { to: "/contact", label: "Contact" },
    { to: "/help", label: "Help" },
    { to: "/profile", label: "Profile" },
    { to: "/admin", label: "Admin" }
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-violet-800 backdrop-blur-sm border-b border-gray-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-2 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out
                    ${isActive 
                      ? 'bg-white text-black shadow-lg ' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="min-h-screen bg-gray-950">
        <Outlet />
      </main>
    </>
  );
}


export default Layout;