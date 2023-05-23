import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Cabecera from './components/cabecera';
import Banner from './components/banner';
import Footer from './components/footer';
import NuevoVideo from './components/formNuevoVideo'
import Grupo from './components/grupo';




const App = () => {
  const [mostrarFormulario, actualizarmostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarmostrar(!mostrarFormulario);
  };

  return (
    <React.StrictMode>
      <Cabecera cambiarMostrar={cambiarMostrar} />
      {mostrarFormulario === true ? <NuevoVideo /> : null }
      <Banner />
      <Grupo />
      <Grupo />
      <Grupo />
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

