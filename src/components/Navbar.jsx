import React, { useState, useEffect } from "react";
import "../styles/style.css";
import 'animate.css';

function NavBar({ toggleModo, modo }){
  
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav className={`animate__animated animate__bounceInDown barraNavegacion ${scrollNav ? "animate__animated animate__bounceInDown barraNavegacion-scroll" : "animate__animated animate__bounceInDown barraNavegacion-stoped"}`}>
      <a href="#inicio" className="btn-nav">Inicio</a>
      <a href="#tecnologias" className="btn-nav">Tecnologías</a>
      <a href="#educacion" className="btn-nav">Educación</a>
      <a href="#sobre-mi" className="btn-nav">Sobre mí</a>
      <a href="#proyectos" className="btn-nav">Proyectos</a>
      <a href="#contacto" className="btn-nav">Contacto</a>
      <button className={`fas fa-${modo ? "sun" : "moon"}`} id="btn-modo" onClick={toggleModo}></button>
    </nav>
  );
};

export default NavBar;
