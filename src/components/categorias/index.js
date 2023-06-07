import React from 'react';
import '../campo-inputs/campo.css';

const Categorias = (props) => {
  const handleChange = (event) => {
    const value = event.target.value;
    props.actualizarValor(event, 'categoria', value);
  };

  return (
    <div className="campo-input">
      <label className="campo-label">{props.title}</label>
      
      <select value={props.valor} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar categoría</option>
        {props.grupos.map((grupo, index) => (
          <option
            key={index}
            style={{ backgroundColor: grupo.color }}
            value={grupo.titulo}
          >
            {grupo.titulo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categorias;
