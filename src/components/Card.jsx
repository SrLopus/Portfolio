import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import 'animate.css';

function Card(datos){
  const tiltRef = useRef(null);
  
  useEffect(() => {
    const tiltNode = tiltRef.current;
    VanillaTilt.init(tiltNode);

    // Limpieza al desmontar el componente
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div data-tilt-glare="true" data-tilt-max-glare="0.2" data-tilt-perspective="500" data-tilt-transition="true" ref={tiltRef} className={`card`}>
      <div className="tools">
        <div className="circle">
          <span className="blue box"></span>
        </div>
        <div className="circle">
          <span className="blue box"></span>
        </div>
        <div className="circle">
          <span className="blue box"></span>
        </div>
      </div>
      <h3>{datos.titulo}</h3>
      <h4>{datos.sitio}</h4>
      <span>{datos.fecha}</span>
    </div>
  );
}


export default Card;

