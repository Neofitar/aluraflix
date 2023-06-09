import React from 'react';
import "./banner.css"

const Banner = ({ ultimoVideo, categorias  }) => {

    const categoria = categorias.find(cat => cat.titulo === ultimoVideo.categoria);
    const tituloPrincipalStyle = {
      backgroundColor: categoria ? categoria.color : '#2A7AE4', // Establecer el color de fondo según la categoría
    };
  return (
    <div className="banner-elementos" style={{ backgroundImage: `url(${ultimoVideo.fondo})`, backgroundSize: 'cover'}}>
      <div className="banner-elementos-texto">
        <h2 className="banner-titulo-principal" style={tituloPrincipalStyle}>{ultimoVideo.categoria}</h2>
        <h3 className="banner-titulo-secundario" style={{color:'#fff'}} >{ultimoVideo.titulo}</h3>
        <p className="banner-descripcion"style={{color:'#fff'}}>{ultimoVideo.descripcion}</p>
      </div>
      <a href={ultimoVideo.link}>
        <img src={ultimoVideo.imagen} alt={ultimoVideo.titulo} />
      </a>
    </div>
  );
};

export default Banner;
