import React, { useState , useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "./components/Navbar.jsx";
import Presentacion from "./components/Presentation.jsx";
import "./styles/style.css";
import 'animate.css';
import Tecnologias from "./components/Carrusel.jsx";
import Card from "./components/Card.jsx"
import Terminal from "./components/Terminal.jsx";
import Proyectos from "./components/Proyectos.jsx";
import daw from "./assets/img/imagenDaw.png";
import smr from "./assets/img/imagenSmr.png";
import { dawTec, smrTec } from "./utils/tecnologias.js";

function App(){

  const [modo, setModo] = useState(false); 

  const toggleModo = () => {
    const oscuro = {
      "--color-texto1": "#f3f4fe",
      "--colorFondo-btn": "#1F2937",
      "--color-btn": "rgba(255, 255, 255, 0.8)",
      "--color-fondo":"#212121",
      "--color-card":"#18181b",
      "--color-terminal":"#333333"
      
    };

    const claro = {
      "--color-texto1": "#343A40",
      "--color-btn": "#065F46",
      "--colorFondo-btn": "#D1FAE5",
      "--color-fondo":"#E8E8E8",
      "--color-card":"#F3F2F2",
      "--color-terminal":"#300A24"
    };

    const nuevoModo = !modo;
    setModo(nuevoModo); 

    const properties = nuevoModo ? oscuro : claro; 
    for (let propiedad in properties) {
      document.documentElement.style.setProperty(propiedad, properties[propiedad]);
    }
  };

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      easing: 'ease-in-out',
      once: true});
  }, []);

  return (
    <div id="main">
      <NavBar toggleModo={toggleModo} modo={modo}/>
      <p id="inicio"></p>
      <Presentacion modo={modo}/>
      <p id="tecnologias"></p><br/>
      <h1 className="tituloSection animate__animated animate__bounceInDown" data-aos="fade-down" data-aos-offset="200">
        <i className="fa-solid fa-microchip"></i> Tecnologías</h1>
      <Tecnologias></Tecnologias>
      <p id="educacion"></p><br/>
      <h1 className="tituloSection" data-aos="fade-up" data-aos-offset="200"><i className="fa-solid fa-graduation-cap"></i> Educación</h1>
      <div className="contenedorEducacion" data-aos="zoom-in" data-aos-offset="200">
        <Card tecnologias={smrTec} img={smr} realizado = "true" titulo="CFGM - Sistemas microinformáticos y redes" sitio="IES Enric Valor" fecha="2021 - 2023"></Card>
        <Card tecnologias={dawTec} img={daw} realizado = "false" titulo="CFGS  - Desarrollo de Aplicaciones Web" sitio="IES Enric Valor" fecha="2023 - Actualidad"></Card>
      </div>
      <p id="sobre-mi"></p><br/>
      <h1 className="tituloSection" data-aos="fade-up" data-aos-offset="200"><i className="fa-solid fa-user"></i> Sobre mí</h1>
      <div data-aos="fade-up" data-aos-offset="200">
        <Terminal></Terminal>
      </div><br/>
      <p id="proyectos"></p><br/>
      <h1 className="tituloSection" data-aos="fade-up" data-aos-offset="200"><i className="fa-solid fa-user"></i> Proyectos</h1>
      <Proyectos></Proyectos>
    </div>
  );
};

export default App;
