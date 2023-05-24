import "./formulario.css"
import CampoInput from "../campo-inputs"
import CampoTextarea from "../campo-textarea"
import BotonAzul from "../boton-azul"
import BotonBlanco from "../boton-blanco"
import Categorias from "../ListaColores"

const NuevoVideo = (props) => {

    const manejarEnvio = (evento) => {
        evento.preventDefault()
    }

    return <section className="formulario-nuevo">
        <h2>Nuevo video</h2>
        <form onSubmit={manejarEnvio}>
            <CampoInput title="Título:" required></CampoInput>
            <CampoInput title="Link del vídeo:" required></CampoInput>
            <CampoInput title="Link imagen del vídeo:" required></CampoInput>
            <CampoTextarea title="Descripción:" required></CampoTextarea>
            <CampoInput title="Código de seguridad:" required></CampoInput>
            <Categorias title="Categoría:"></Categorias>
            <div className="botones">
                <div className="botones-add">
                    <BotonAzul id="ck"title="Guardar"></BotonAzul>
                    <BotonBlanco title="Limpiar"></BotonBlanco>
                </div>
                <BotonAzul title="Nueva categoría"></BotonAzul>
            </div>

        </form>

    </section>

}

export default NuevoVideo
