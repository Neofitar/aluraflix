import "../campo-inputs/campo.css"

const CampoTextarea = (props) => {
    return <div className="campo-input" >
        <label className="campo-label">{props.title}</label>
        <textarea></textarea>
    </div>
}

export default CampoTextarea