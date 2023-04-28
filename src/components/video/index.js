import "./video.css"

const VideoImg = (props) => {
    return <div className="video">
        <img src={props.src} alt={props.alt} ></img>
    </div>
}

export default VideoImg