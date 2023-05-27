import "./botonBlanco.css"

const BotonBlanco = (props) => {
    return <div>
        <button onClick={props.onClick} className="boton-blanco">{props.title}</button>
    </div>
}

export default BotonBlanco