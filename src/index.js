import React from 'react';
import ReactDOM from 'react-dom/client';
import Cabecera from './components/cabecera';
import Banner from './components/banner';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecera/>
    <Banner/>
    <Footer/>
  </React.StrictMode>
);

