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

  // Lista de grupos
  const grupos = [
    { titulo: 'Programación', color: '#6BD1FF' },
    { titulo: 'Back End', color: '#00C86F' },
    { titulo: 'Front End', color: '#FFBA05' },
    { titulo: 'Móvil', color: '#DC6EBE' },
    { titulo: 'Análisis de datos', color: '#9CD33B' },
    { titulo: 'Data Science', color: '#6B5BE2' },
    { titulo: 'Devops', color: '#FF8C2A' },
    { titulo: 'Innovación y Gestión', color: '#9CD33B' },
    { titulo: 'UX y Diseño', color: '#6BD1FF' },
  ];

  
  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path='/' element={<Home grupos={grupos} />} />
        <Route path='/nuevoVideo' element={<NuevoVideo categoria={grupos} />}/>
        <Route path='/nuevaCategoria' element={<NuevaCategoria />} />
      </Routes>
      <Footer />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
