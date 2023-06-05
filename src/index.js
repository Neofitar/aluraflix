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

  const [nuevosVideos, setNuevosVideos] = useState([]);

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
