import "../formNuevoVideo/formulario.css";
import React from 'react';
import CampoInput from "../campo-inputs";
import CampoTextarea from "../campo-textarea";
import BotonAzul from "../boton-azul";
import BotonBlanco from "../boton-blanco";
import { useState } from "react";
import TablaCategorias from "../tablaCategorias";

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

  const handleChange = (event, campo) => {
    setCategoria({ ...categoria, [campo]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categoria);
    limpiarFormulario();
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
        <thead>
          <tr className="tabla-cabecera">
            <th className="td-titulo">Nombre</th>
            <th className="td-descripcion">Descripción</th>
            <th className="td-btn">Color</th>
            <th className="td-btn">Editar</th>
            <th className="td-btn">Remover</th>
          </tr>
        </thead>
        <tbody>
          {props.grupos && props.grupos.map((categoria) => (
            <TablaCategorias
              title={categoria.titulo}
              descripcion={categoria.descripcion}
              color={categoria.color}
              key={categoria.id}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default NuevaCategoria;