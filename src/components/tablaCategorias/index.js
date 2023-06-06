import "../formNuevoVideo/formulario.css";

const TablaCategorias = (props) => {
    return (
        <tr className="td_body">
            <th className="td-titulo">{props.title}</th>
            <th className="td-descripcion">{props.descripcion}</th>
            <th className="td-btn" style={{backgroundColor:props.color}}><span>{props.color}</span></th>
            <th className="button-edit">Editar</th>
            <th className="button-delete">Remover</th>
        </tr>
    )

}

export default TablaCategorias