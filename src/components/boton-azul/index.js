import "./botonAzul.css"

const BotonAzul = (props) => {
    return <div>
    <button onClick={props.onClick} className="boton-azul">{props.title}</button>
</div>
}

export default BotonAzul