import "../formNuevoVideo/formulario.css";
import React from 'react';
import CampoInput from "../campo-inputs";
import CampoTextarea from "../campo-textarea";
import BotonAzul from "../boton-azul";
import BotonBlanco from "../boton-blanco";
import { useState } from "react";
import TablaCategorias from "../tablaCategorias";
import { useNavigate } from "react-router-dom";

const NuevaCategoria = (props) => {

  const [categoria, setCategoria] = useState({
    titulo: '',
    descripcion: '',
    color: '',
    codigoSeguridad: '',
  });

  const limpiarFormulario = () => {
    setCategoria({
      titulo: '',
      descripcion: '',
      color: '',
      codigoSeguridad: '',
    });
  };

  const navigate = useNavigate();

  const irNuevoVideo = () => {
    navigate('/nuevoVideo')
}


  const handleChange = (event, campo) => {
    setCategoria({ ...categoria, [campo]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categoria);
    props.registrarCategoria(categoria);
    limpiarFormulario();
    irNuevoVideo();
    
  };

  return (
    <section className="formulario-nuevo">
      <h2>Nueva categoría</h2>
      <form onSubmit={handleSubmit}>
        <CampoInput
          title="Nombre:"
          valor={categoria.titulo}
          actualizarValor={(event) => handleChange(event, "titulo")}
          required
        />
        <CampoTextarea
          title="Descripción:"
          valor={categoria.descripcion}
          actualizarValor={(event) => handleChange(event, "descripcion")}
          required
        />
        <CampoInput
          title="Color:"
          type="color"
          required
          valor={categoria.color}
          actualizarValor={(event) => handleChange(event, "color")}
        />
        <CampoInput
          title="Código de seguridad:"
          valor={categoria.codigoSeguridad}
          actualizarValor={(event) => handleChange(event, "codigoSeguridad")}
          required
        />
        <div className="botones">
          <div className="botones-add">
            <BotonAzul id="ck" type="submit" title="Guardar"></BotonAzul>
            <BotonBlanco title="Limpiar" onClick={limpiarFormulario}></BotonBlanco>
          </div>
        </div>
      </form>
      <table className="tabla-categorias">
        <thead className="tabla-cabecera">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Color</th>
            <th>Editar</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {props.nuevaCate && props.nuevaCate.map((categorias) => (
            <TablaCategorias
              title={categorias.titulo}
              descripcion={categorias.descripcion}
              color={categorias.color}
              key={categorias.id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NuevaCategoria;
