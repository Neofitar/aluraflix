import "./cabecera.css"
import Boton from "../boton-add"
import { useNavigate } from "react-router-dom"

const Cabecera = (props) => {

    const ir = useNavigate();

    const irHome = () => {
        ir ('/');
    };

    const irCrearVideo = () => {
        ir ('/nuevoVideo')
    };

    return <header className="cabecera">
        <div className="cabecera_elementos">
            <img onClick={irHome} className="logo" src="/img/logo192.png" alt="logo"></img>
            <Boton onClick={irCrearVideo} title="Nuevo vídeo" ></Boton>
        </div>
    </header>

}

export default Cabecera