import javasript from "../assets/icons/javascript.svg";
import java from "../assets/icons/java.svg";
import react from "../assets/icons/react.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import php from "../assets/icons/php.svg";
import nodejs from "../assets/icons/nodejs.svg";
import git from "../assets/icons/git.svg";
import vite from "../assets/icons/vite.svg";
import 'animate.css';
import "../styles/style.css";

function Carrusel(){
    return (
        <div className="banner animate__animated animate__bounceInDown">
            <div className="slider" style={{ "--quantity": 9 }}>
                <div className="item" style={{ "--position": 1 }}>
                    <img src={javasript} alt="" />
                </div>
                <div className="item" style={{ "--position": 2 }}>
                    <img src={git} alt="" />
                </div>
                <div className="item" style={{ "--position": 3 }}>
                    <img src={react} alt="" />
                </div>
                <div className="item" style={{ "--position": 4 }}>
                    <img src={html} alt="" />
                </div>
                <div className="item" style={{ "--position": 5 }}>
                    <img src={css} alt="" />
                </div>
                <div className="item" style={{ "--position": 6 }}>
                    <img src={java} alt="" />
                </div>
                <div className="item" style={{ "--position": 7 }}>
                    <img src={php} alt="" />   
                </div>
                <div className="item" style={{ "--position": 8 }}>
                    <img src={nodejs} alt="" />  
                </div>
                <div className="item" style={{ "--position": 9 }}>
                    <img src={vite} alt="" />
                </div>
            </div>
        </div>
    );
  };
  export default Carrusel;