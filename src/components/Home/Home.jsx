import React from 'react';
import Banner from '../banner';
import Grupo from '../grupo';

const Home = ({ grupos }) => {
  return (
    <div>
      <Banner />
      {grupos.map((grupo) => (
        <Grupo datos={grupo} key={grupo.titulo} />
      ))}
    </div>
  );
};

export default Home;