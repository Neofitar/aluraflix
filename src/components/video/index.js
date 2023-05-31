import "./video.css"

const VideoImg = (props) => {
    return <div className="video">
        <img
            src={props.src}
            alt={props.alt}
            style={{ borderColor:props.color }}
            href={props.href}
            key={props.codigoSeguridad}
            categoria={props.categoria}
        ></img>
        <p>{props.title}</p>
    </div>
}

export default VideoImg