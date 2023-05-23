import "../campo-inputs/campo.css"

const CampoInput = (props) => {
    return <div className="campo-input">
        <label className="campo-label">{props.title}</label>
        <input required={props.required}></input>
    </div>
}

export default CampoInput