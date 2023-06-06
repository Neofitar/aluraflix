import "./video.css"

const VideoImg = (props) => {
    return (
      <div className="video">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
          <img
            src={props.src}
            alt={props.alt}
            style={{ borderColor: props.color }}
            key={props.codigoSeguridad}
            categoria={props.categoria}
          ></img>
        </a>
        <p>{props.title}</p>
      </div>
    );
  };
  

export default VideoImg