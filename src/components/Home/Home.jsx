import React from 'react';
import Banner from '../banner';
import Grupo from '../grupo/index';

const Home = ({ grupos, nuevosVideos }) => {
  return (
    <div>
      <Banner />
      {grupos.map((grupo) => (
        <Grupo 
        datos={grupo} 
        key={grupo.titulo}
        nuevosVideos={nuevosVideos.filter(nuevosVideos => nuevosVideos.categoria === grupo.titulo)}
        />
      ))}
    </div>
  );
};

export default Home;