import React from 'react';
import Banner from '../banner';
import Grupo from '../grupo/index';

const Home = ({ nuevaCate, nuevosVideos, ultimoVideo }) => {
  if (!nuevaCate || !Array.isArray(nuevaCate)) {
    return null; // O muestra un mensaje de error o un estado de carga, según corresponda
  }

  return (
    <div>
      <Banner ultimoVideo={ultimoVideo} categorias={nuevaCate}/>
      {nuevaCate.map((categoria) => (
        <Grupo
          datos={categoria}
          key={categoria.titulo}
          nuevosVideos={nuevosVideos.filter(video => video.categoria === categoria.titulo)}
        />
      ))}
    </div>
  );
};

export default Home;

