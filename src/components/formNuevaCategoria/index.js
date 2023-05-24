import "../formNuevoVideo/formulario.css"
import CampoInput from "../campo-inputs"
import CampoTextarea from "../campo-textarea"
import BotonAzul from "../boton-azul"
import BotonBlanco from "../boton-blanco"
import ListaColores from "../ListaColores"

const NuevaCategoria = () => {

    const manejarEnvio = (evento) => {
        evento.preventDefault()
    }



    return <section className="formulario-nuevo">
        <h2>Nuevo categoría</h2>
        <form onSubmit={manejarEnvio}>
            <CampoInput title="Nombre:" required></CampoInput>
            <CampoTextarea title="Descripción:" required></CampoTextarea>
            <CampoInput title="Color:" type="color" required></CampoInput>
            <CampoInput title="Código de seguridad:" required></CampoInput>
            <div className="botones">
                <div className="botones-add">
                    <BotonAzul id="ck" title="Guardar"></BotonAzul>
                    <BotonBlanco title="Limpiar"></BotonBlanco>
                </div>
            </div>
        </form>
        <table className="tabla-categorias">
            <tr className="tabla-cabecera">
                <td>Nombre</td>
                <td>Descripción</td>
                <td>Editar</td>
                <td>Remover</td>
            </tr>
            <tr>
                <td>Back End</td>
                <td>Todos los video que estoy usando para estudiar Back End </td>
                <td>
                    <button className="button-edit">Editar</button>
                </td>
                <td>
                    <button className="button-delete">Remover</button>
                </td>
            </tr>
        </table>

    </section>
}

export default NuevaCategoria