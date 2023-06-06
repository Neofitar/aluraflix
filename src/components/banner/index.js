import "./banner.css"

const Banner = (props) => {
    return <div className="banner-elementos">
        <div className="banner-elementos-texto">
            <h2 className="banner-titulo-principal">Front End</h2>
            <h3 className="banner-titulo-secundario">Challenge React</h3>
            <p className="banner-descripcion">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
        </div>
        <a href="#">
            <img src="/img/image7.png" alt="#"></img>
        </a>

    </div>
}

export default Banner