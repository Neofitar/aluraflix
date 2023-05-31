import "../campo-inputs/campo.css"

const CampoTextarea = (props) => {

    return <div className="campo-input" >
        <label className="campo-label">{props.title}</label>
        <textarea 
            required={props.required}
            value={props.valor}
            onChange={props.actualizarValor}
        ></textarea>
    </div>
}

export default CampoTextarea