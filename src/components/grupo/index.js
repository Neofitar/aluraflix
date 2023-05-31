import React from 'react';
import '../grupo/grupo.css';
import VideoImg from '../video';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Grupo = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    centerMode: true,
    centerPadding: '45px'
  };

  console.log(props.nuevosVideos.length > 0);

  return (
    props.nuevosVideos.length > 0 && (
      <section className="grupo">
        <div className="grupo-detalles">
          <h3 style={{ backgroundColor: props.datos.color }}>{props.datos.titulo}</h3>
          <p>Formación {props.datos.titulo} de Alura Latam</p>
        </div>
        <div className="grupo-videos">
          <Slider {...settings}>
            {props.nuevosVideos.map((video) => (
              <VideoImg
                src={video.imagen}
                alt={video.titulo}
                title={video.titulo}
                key={video.codigoSeguridad}
                categoria={video.categoria}
                color={props.datos.color}
              />
            ))}
          </Slider>
        </div>
      </section>
    )
  );
};

export default Grupo;
