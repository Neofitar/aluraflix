import "./footer.css"
import { useNavigate } from "react-router-dom"


const Footer = () => {

    const ir = useNavigate();

    const irHome = () => {
        ir('/');
    };

    return <footer className="footer-elements">
        <img className="logo" src="/img/logo192.png" alt="logo" onClick={irHome}></img>
    </footer>
}

export default Footer