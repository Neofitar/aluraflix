import "./video.css"

const VideoImg = (props) => {
    return <div className="video">
        <img
            src={props.src}
            alt={props.alt}
            style={{ borderColor: "blue" }}
            href={props.href}
        ></img>
    </div>
}

export default VideoImg