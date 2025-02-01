import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import 'animate.css';

function Card({ img, titulo, realizado, fecha, tecnologias }) {
  const tiltRef = useRef(null);
  
  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode);

    // Limpieza al desmontar el componente
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div data-tilt-perspective="800" data-tilt-gyroscope="true" 
     data-tilt-gyroscope-min-angle-x="-45" 
     data-tilt-gyroscope-max-angle-x="45" 
     data-tilt-gyroscope-min-angle-y="-45" 
     data-tilt-gyroscope-max-angle-y="45" data-tilt-transition="true" ref={tiltRef} className="card">
      <div className='card-cabecera'>
        <img className='card-img' src={img} alt={titulo} />
        <div className='card-cabecera-interior'>
          <h2 className='tituloCard'>{titulo}</h2>
          <div className='card-info'>
            <span className={`${realizado === "true" ? "realizado" : "noRealizado"}`}>{realizado === "true" ? "Completado" : "Cursando"}</span>
            <span className='card-fecha'><i className="fa-solid fa-location-dot"></i> {fecha}</span>
          </div>
        </div>
      </div>
      <div className='card-tecnologias'>
        {Array.isArray(tecnologias) && tecnologias.map((tecnologia, index) => {
          return <span key={index} className='etiqueta'>{tecnologia}</span>;
        })}
      </div>
    </div>
  );
}

export default Card;
