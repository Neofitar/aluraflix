import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Cabecera from './components/cabecera';
import Banner from './components/banner';
import Footer from './components/footer';
import NuevoVideo from './components/formNuevoVideo'
import Grupo from './components/grupo';
import NuevaCategoria from './components/formNuevaCategoria';




const App = () => {
  const [mostrarFormulario, actualizarmostrar] = useState(false);

  const cambiarMostrar = () => {
    actualizarmostrar(!mostrarFormulario);
  };

  //Lista grupos

  const grupos = [{
    titulo:"Programación",
    color:"#6BD1FF"
  },
  {
    titulo: "Back End",
    color:"#00C86F"
  },
  {
    titulo:"Front End",
    color:"#FFBA05"
  },
  {
    titulo:"Móvil",
    color:"#DC6EBE"
  },
  {
    titulo: "Análisis de datos",
    color:"#9CD33B"
  },
  {
    titulo:"Data Science",
    color:"#6B5BE2"
  },
  {
    titulo:"Devops",
    color:"#FF8C2A"
  },
  {
    titulo:"Innovación y Gestión",
    color:  "#9CD33B"
  },
  {
    titulo: "UX y Diseño",
    color:"#6BD1FF"
  }
];





  return (
    <React.StrictMode>
      <Cabecera cambiarMostrar={cambiarMostrar} />
      {mostrarFormulario === true ? <NuevoVideo categoria={grupos} />: null }
      <Banner />
      {
        grupos.map((grupos) => <Grupo datos={grupos} key={grupos}/>)
      }
      <NuevaCategoria/>
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

