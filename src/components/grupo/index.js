import "./grupo.css"

const Grupo = (props) => {
    return <section className="grupo">
        <div className="grupo-detalles">
        <h3 style={{backgroundColor:props.datos.color}}>{props.datos.titulo}</h3>
        <p>Formación {props.datos.titulo} de Alura Latam</p>
        </div>
        <div className="grupo-videos">
        </div>

    </section>
}

export default Grupo