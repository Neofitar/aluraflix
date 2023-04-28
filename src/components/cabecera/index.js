import "./cabecera.css"
import Boton from "../boton-add"

const Cabecera = () => {
    return <header className="cabecera">
        <div className="cabecera_elementos">
            <img className="logo" src="/img/logo.png" alt="logo"></img>
            <Boton title="Nuevo vídeo"></Boton>
        </div>
    </header>

}

export default Cabecera