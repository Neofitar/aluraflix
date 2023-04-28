import "../formNuevoVideo/formulario.css"
import CampoInput from "../campo-inputs"
import CampoTextarea from "../campo-textarea"
import BotonAzul from "../boton-azul"
import BotonBlanco from "../boton-blanco"

const NuevaCategoria = () => {
    return <section className="formulario-nuevo">
        <h2>Nuevo categoria</h2>
        <form>
            <CampoInput title="Nombre:"></CampoInput>
            <CampoTextarea title="Descripción:"></CampoTextarea>
            <CampoInput title="Color:"></CampoInput>
            <CampoInput title="Código de seguridad:"></CampoInput>
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