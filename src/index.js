import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecera from './components/cabecera';
import Footer from './components/footer';
import NuevoVideo from './components/formNuevoVideo';
import NuevaCategoria from './components/formNuevaCategoria';
import Home from './components/Home/Home';

const App = () => {

  const [nuevosVideos, setNuevosVideos] = useState([
    {
      categoria: "👻| El antipodcast",
      codigoSeguridad: "001",
      descripcion: "La etimología de la palabra fantasma viene del griego phanein. Hoy en el antipodcast nos preguntamos ¿de dónde vienen los fantasmas y porqué están entre nosotros? No te pierdas un nuevo episodio del antipodcast.",
      imagen: "https://i.ytimg.com/an_webp/ptvFqQ5hJuc/mqdefault_6s.webp?du=3000&sqp=CO71iaQG&rs=AOn4CLBQYgyLI9Tc09eg0ZriHwqJssaa7w",
      link: "https://www.youtube.com/watch?v=Dj2fxw_7hdU&ab_channel=ELANTIPODCAST",
      titulo: "¿Invocaron al demonio en la Segunda Guerra Mundial?",
      fondo: "https://i.ytimg.com/an_webp/Dj2fxw_7hdU/mqdefault_6s.webp?du=3000&sqp=CNuFiqQG&rs=AOn4CLBzKnCnHz8sXxrIowK7SIOl-5uMag"
    },
    {
      categoria: "👻| El antipodcast",
      codigoSeguridad: "002",
      descripcion: "Vídeo Front End.",
      imagen: "https://i.ytimg.com/an_webp/rFMUK4OmaGw/mqdefault_6s.webp?du=3000&sqp=CIiTiqQG&rs=AOn4CLCZv6g4q6_2OBC2dxsGRi750cF0aw",
      link: "https://youtu.be/rpvrLaBQwgg",
      titulo: "Fallos en la realidad y saltos cuánticos",
      fondo: "https://i.ytimg.com/vi/D0gIkkrQ_AQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB1oBICDtdQZVa7DCgoMTL2wMOWlg"
    },
    {
      categoria: "👻| El antipodcast",
      codigoSeguridad: "003",
      descripcion: "Vídeo Front End.",
      imagen: "https://i.ytimg.com/vi/UuAX5azcvDQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANQCnxWMWjK09Z80LzZEn4oj0PGQ",
      link: "https://youtu.be/UuAX5azcvDQ",
      titulo: "¿Cómo un desarrollador utiliza el Figma?",
      fondo: "https://i.ytimg.com/vi/D0gIkkrQ_AQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB1oBICDtdQZVa7DCgoMTL2wMOWlg"

    },
    {
      categoria: "👻| El antipodcast",
      codigoSeguridad: "004",
      descripcion: "Vídeo Front End.",
      imagen: "https://i.ytimg.com/vi/fpth65ts3cw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvsZSL2HZddDf0Jo0druhP21HJ9Q",
      link: "https://youtu.be/fpth65ts3cw",
      titulo: "Guia de carreira Front-end",
      fondo: "https://i.ytimg.com/vi/D0gIkkrQ_AQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB1oBICDtdQZVa7DCgoMTL2wMOWlg"

    },
    {
      categoria: "👻| El antipodcast",
      codigoSeguridad: "001",
      descripcion: "La etimología de la palabra fantasma viene del griego phanein. Hoy en el antipodcast nos preguntamos ¿de dónde vienen los fantasmas y porqué están entre nosotros? No te pierdas un nuevo episodio del antipodcast.",
      imagen: "https://i.ytimg.com/an_webp/ptvFqQ5hJuc/mqdefault_6s.webp?du=3000&sqp=CO71iaQG&rs=AOn4CLBQYgyLI9Tc09eg0ZriHwqJssaa7w",
      link: "https://www.youtube.com/watch?v=Dj2fxw_7hdU&ab_channel=ELANTIPODCAST",
      titulo: "¿Invocaron al demonio en la Segunda Guerra Mundial?",
      fondo: "https://w0.peakpx.com/wallpaper/206/226/HD-wallpaper-halloween-ghosts-ghost-halloween-artist-artwork-digital-art.jpg"
    },


  ]);


  //Seleccionar último vídeo agregado para banner
  let ultimoVideo = null;
  if (nuevosVideos.length > 0) {
    ultimoVideo = nuevosVideos[nuevosVideos.length - 1];
  }
  //Registrar nuevos videos

  const registrarVideo = (NuevoVideo) => {
    console.log("Nuevo video", NuevoVideo)
    //spread operator
    setNuevosVideos([...nuevosVideos, NuevoVideo])
  }

  const [nuevaCate, setNuevaCate] = useState([
    {
      id: "001",
      titulo: "👻| El antipodcast",
      color: "#660000",
      descripcion: "Todos los video que estoy usando para estudiar Programación."
    },
    {
      id: "002",
      titulo: "Back End",
      color: "#00C86F",
      descripcion: "Todos los video que estoy usando para estudiar Back End."
    },
    {
      id: "003",
      titulo: "Front End",
      color: "#FFBA05",
      descripcion: "Todos los video que estoy usando para estudiar Front End."

    },
    {
      id: "004",
      titulo: "Móvil",
      color: "#DC6EBE",
      descripcion: "Todos los video que estoy usando para estudiar Móvil."

    },
    {
      id: "005",
      titulo: "Análisis de datos",
      color: "#9CD33B",
      descripcion: "Todos los video que estoy usando para estudiar Análisis de datos."

    },
    {
      id: "006",
      titulo: "Data Science",
      color: "#6B5BE2",
      descripcion: "Todos los video que estoy usando para estudiar Data Science."

    },
    {
      id: "007",
      titulo: "Devops",
      color: "#FF8C2A",
      descripcion: "Todos los video que estoy usando para estudiar Devops."

    },
    {
      id: "008",
      titulo: "Innovación y Gestión",
      color: "#9CD33B",
      descripcion: "Todos los video que estoy usando para estudiar Innovación y Gestión."

    },
    {
      id: "009",
      titulo: "UX y Diseño",
      color: "#6BD1FF",
      descripcion: "Todos los video que estoy usando para estudiar UX y Diseño."

    }
  ]);

  const registrarCategoria = (NuevaCate) => {
    console.log("Nueva categoría", NuevaCate)
    setNuevaCate([...nuevaCate, NuevaCate])
  }


  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path='/' element={<Home nuevaCate={nuevaCate} nuevosVideos={nuevosVideos} ultimoVideo={ultimoVideo} />} />
        <Route path='/nuevoVideo' element={<NuevoVideo nuevaCate={nuevaCate} registrarVideo={registrarVideo} />} />
        <Route path="/nuevaCategoria" element={<NuevaCategoria nuevaCate={nuevaCate} registrarCategoria={registrarCategoria} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
