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
        setVideo({
            titulo: '',
            link: '',
            imagen: '',
            descripcion: '',
            codigoSeguridad: '',
            categoria: '',
        });
    };

    const navigate = useNavigate();

    const irNuevaCategoria = () => {
        navigate('/nuevaCategoria');
    };

    const handleChange = (event, campo) => {
        const { value } = event.target;
        setVideo((prevVideo) => ({
            ...prevVideo,
            [campo]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.registrarVideo(video);
        limpiarFormulario();
    };

    return (
        <section className="formulario-nuevo">
            <h2>Nuevo video</h2>
            <form onSubmit={handleSubmit}>
                <CampoInput
                    title="Título:"
                    valor={video.titulo}
                    actualizarValor={(event) => handleChange(event, "titulo")}
                    required
                />
                <CampoInput
                    title="Link del vídeo:"
                    valor={video.link}
                    actualizarValor={(event) => handleChange(event, "link")}
                    required
                />
                <CampoInput
                    title="Link imagen del vídeo:"
                    valor={video.imagen}
                    actualizarValor={(event) => handleChange(event, "imagen")}
                    required
                />
                <CampoTextarea
                    title="Descripción:"
                    valor={video.descripcion}
                    actualizarValor={(event) => handleChange(event, "descripcion")}
                    required
                />
                <CampoInput
                    title="Código de seguridad:"
                    valor={video.codigoSeguridad}
                    actualizarValor={(event) => handleChange(event, "codigoSeguridad")}
                    required
                />
                <Categorias
                    title="Categoría:"
                    valor={video.categoria}
                    actualizarValor={(event, campo, value) => handleChange(event, campo, value)}
                    grupos={props.nuevaCate}
                />
                <div className="botones">
                    <div className="botones-add">
                        <BotonAzul id="ck" type="submit" title="Guardar"></BotonAzul>
                        <BotonBlanco title="Limpiar" onClick={limpiarFormulario}></BotonBlanco>
                    </div>
                    <BotonAzul title="Nueva categoría" onClick={irNuevaCategoria} />
                </div>
            </form>
        </section>
    );
}

export default NuevoVideo


