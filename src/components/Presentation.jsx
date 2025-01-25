import "../styles/style.css";
import 'animate.css';
import heroImage from "../assets/img/hero.png";
import heroImageDark from "../assets/img/hero2.png";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg"

function Presentacion(modo){
  return (
    <section className="presentacion animate__animated animate__bounceInDown">
      <img src={modo?heroImageDark:heroImage} id="img-hero" className="img-hero" alt="Hero"/>
      <h1 className="tituloPres">Hola, soy Raúl Juan</h1>
      <p className="textoPres">
        <span style={{ color: "#035ffb" }}>Desarrollador de aplicaciones web</span>
        <br />
         de Alicante, España.
      </p>
      <span className="btn-estado">
        <span className="btn-estado-inner">Disponible para trabajar</span>
      </span>
      <div className="botonesContacto">
        <a href="https://www.linkedin.com/in/raúl-juan-martí-b3a66a257/"><img src={linkedin} alt="LinkedIn" className="icon-linkedin"/></a>
        <a href="https://github.com/SrLopus"><img src={github} alt="GitHub" className="icon-github"/></a>
        <a href="mailto:rauljuanmarti@gmail.com"><img src={gmail} alt="Gmail" className="icon-gmail"/></a>
      </div>
    </section>
  );
};

export default Presentacion;
