import "../formNuevoVideo/formulario.css";

const TablaCategorias = (props) => {
    return (
        <tr className="tabla-cabecera">
            <th className="td-titulo">{props.title}</th>
            <th className="td-descripcion">{props.descripcion}</th>
            <th className="td-btn">{props.color}</th>
            <th className="td-btn">Editar</th>
            <th className="td-btn">Remover</th>
        </tr>
    )

}

export default TablaCategorias