import React, { useState, useEffect } from 'react';
import '../grupo/grupo.css';
import VideoImg from '../video';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Grupo = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const PantallaCelular = windowWidth <= 750;
  const PantallaTablet = windowWidth <= 1200;
  const PantallaPC = windowWidth <= 1364;

  const settings = {
    dots: true,
    infinite: props.nuevosVideos.length > 2,
    speed: 500,
    slidesToShow: PantallaCelular ? 1 : PantallaTablet ? 2 : PantallaPC ? 3 : 3,
    slidesToScroll: 2,
    vertical: false,
    centerMode: true,
    centerPadding: '15px'
  };

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
                href={video.link}
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
