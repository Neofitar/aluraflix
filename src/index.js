import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './components/cabecera';
import Footer from './components/footer';
import NuevoVideo from './components/formNuevoVideo';
import NuevaCategoria from './components/formNuevaCategoria';
import Home from './components/Home/Home';
import grupos from './db/categoriasDB';

const App = () => {

  const [nuevosVideos, setNuevosVideos] = useState([
    {
      categoria:"Programación",
      codigoSeguridad:"001",
      descripcion:"Vídeo de programación.",
      imagen:"https://i.ytimg.com/vi/bn46ZB8yutI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnJDA_K5IpCZ5JAK0hYVt5BX7gww",
      link:"https://youtu.be/bn46ZB8yutI",
      titulo:"¿Dónde aprender programación?"
    },
    {
      categoria:"Front End",
      codigoSeguridad:"002",
      descripcion:"Vídeo Front End.",
      imagen:"https://i.ytimg.com/vi/R9uaBxgCkyA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZ9iKhFiCiQs4M1NPR7mIBUXh21g",
      link:"https://youtu.be/rpvrLaBQwgg",
      titulo:"Equipo Front End"
    },
    {
      categoria:"Front End",
      codigoSeguridad:"003",
      descripcion:"Vídeo Front End.",
      imagen:"https://i.ytimg.com/vi/UuAX5azcvDQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANQCnxWMWjK09Z80LzZEn4oj0PGQ",
      link:"https://youtu.be/UuAX5azcvDQ",
      titulo:"¿Cómo un desarrollador utiliza el Figma?"
    },
    {
      categoria:"Front End",
      codigoSeguridad:"004",
      descripcion:"Vídeo Front End.",
      imagen:"https://i.ytimg.com/vi/fpth65ts3cw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvsZSL2HZddDf0Jo0druhP21HJ9Q",
      link:"https://youtu.be/fpth65ts3cw",
      titulo:"Guia de carreira Front-end"
    },
    {
      categoria:"Front End",
      codigoSeguridad:"005",
      descripcion:"Vídeo Front End.",
      imagen:"https://i.ytimg.com/vi/MxlxFhzGRV8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9MdMB3da1gzziUY2z-th2VB6vmg",
      link:"https://youtu.be/MxlxFhzGRV8",
      titulo:"Cómo aplicar Dark Mode en tu proyecto"
    }
    
    
  ]);

  //Registrar nuevos videos

  const registrarVideo = (NuevoVideo) => {
    console.log("Nuevo video", NuevoVideo)
    //spread operator
    setNuevosVideos([...nuevosVideos, NuevoVideo])
  }


  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path='/' element={<Home grupos={grupos} nuevosVideos={nuevosVideos} />} />
        <Route path='/nuevoVideo' element={<NuevoVideo categoria={grupos} registrarVideo={registrarVideo} />} />
        <Route path="/nuevaCategoria" element={<NuevaCategoria grupos={grupos} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
