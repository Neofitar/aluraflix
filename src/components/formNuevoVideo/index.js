import React, { useState } from 'react';
import "./formulario.css";
import CampoInput from "../campo-inputs";
import CampoTextarea from "../campo-textarea";
import BotonAzul from "../boton-azul";
import BotonBlanco from "../boton-blanco";
import Categorias from "../categorias";
import { useNavigate } from 'react-router-dom';


const NuevoVideo = (props) => {

    const [video, setVideo] = useState({
        titulo: '',
        link: '',
        imagen: '',
        descripcion: '',
        codigoSeguridad: '',
        categoria: '',
    });

    const limpiarFormulario = () => {
        setVideo ({
            titulo: '',
            link: '',
            imagen: '',
            descripcion: '',
            codigoSeguridad: '',
            categoria: '',
        });
    }

    const navigate = useNavigate();

    const irNuevaCategoria = () => {
      navigate('/nuevaCategoria');
    };

    return (
        <section className="formulario-nuevo">
            <h2>Nuevo video</h2>
            <form onSubmit={limpiarFormulario}>
                <CampoInput title="Título:" required></CampoInput>
                <CampoInput title="Link del vídeo:" required></CampoInput>
                <CampoInput title="Link imagen del vídeo:" required></CampoInput>
                <CampoTextarea title="Descripción:" required></CampoTextarea>
                <CampoInput title="Código de seguridad:" required></CampoInput>
                <Categorias title="Categoría:"></Categorias>
                <div className="botones">
                    <div className="botones-add">
                        <BotonAzul id="ck" title="Guardar"></BotonAzul>
                        <BotonBlanco title="Limpiar" onClick={limpiarFormulario}></BotonBlanco>
                    </div>
                    <BotonAzul title="Nueva categoría" onClick={irNuevaCategoria} />
                </div>
            </form>
        </section>
    );
}

export default (NuevoVideo);
