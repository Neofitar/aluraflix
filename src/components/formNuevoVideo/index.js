import "./formulario.css"
import CampoInput from "../campo-inputs"
import CampoTextarea from "../campo-textarea"
import BotonAzul from "../boton-azul"
import BotonBlanco from "../boton-blanco"

const NuevoVideo = () => {
    return <section className="formulario-nuevo">
        <h2>Nuevo video</h2>
        <form>
            <CampoInput title="Título:"></CampoInput>
            <CampoInput title="Link del vídeo:"></CampoInput>
            <CampoInput title="Link imagen del vídeo:"></CampoInput>
            <CampoInput title="Título:"></CampoInput>
            <CampoTextarea title="Descripción:"></CampoTextarea>
            <CampoInput title="Código de seguridad:"></CampoInput>
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
