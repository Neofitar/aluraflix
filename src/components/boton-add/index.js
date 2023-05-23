import "./boton.css"

const Boton = (props) => {
    return <div>
        <button onClick={props.onClick}  className="button-add">{props.title}</button>
    </div>
}
export default Boton