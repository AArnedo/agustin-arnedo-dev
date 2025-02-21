// Función para manejar el estado del menú de navegación
export const handleNavToggle = (nav, setNav) => {
    setNav(!nav);
};


export const handleHero = (setNav, setShowHero) => {
  setNav(false);
  setShowHero(true);
}

// Función para manejar el click en "Sobre mi"
export const handleSobreMiClick = (setNav, setShowSobreMi) => {
    setNav(false);          // Cerrar el menú
    setShowSobreMi(true);   // Mostrar la sección "Sobre Mi"
};

export const handleProyectos = (setNav, setShowProyectos) => {
    setNav(false);
    setShowProyectos(true);
};

export const handleContactos = (setNav, setShowContactos) => {
    setNav(false);
    setShowContactos(true);
};
