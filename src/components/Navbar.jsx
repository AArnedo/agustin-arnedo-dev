import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const linkStyle = (path) => {
    return path === activeLink
      ? "text-[#222222] underline"
      : "text-[#7A7A7A] hover:text-[#222222]";
  };

  return (
    <div className="absolute right-0 top-0 flex justify-center space-x-10 px-20 py-4 bg-[#D9D9D9] rounded-bl-2xl rounded-tr-2xl text-xl">
      <div className="hover:underline">
        <Link
          to="/"
          className={linkStyle("/")}
          onClick={() => setActiveLink("/")}
        >
          Sobre Mi
        </Link>
      </div>
      <div className="hover:underline">
        <Link
          to="/proyectos"
          className={linkStyle("/proyectos")}
          onClick={() => setActiveLink("/proyectos")}
        >
          Proyectos
        </Link>
      </div>
      <div className="hover:underline">
        <Link
          to="/contactos"
          className={linkStyle("/contactos")}
          onClick={() => setActiveLink("/contactos")}
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};