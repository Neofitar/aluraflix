import "../campo-inputs/campo.css"

const CampoInput = (props) => {
    return <div className="campo-input">
        <label className="campo-label">{props.title}</label>
        <input></input>
    </div>
}

export default CampoInput