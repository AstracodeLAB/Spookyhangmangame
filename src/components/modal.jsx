import Bat from '../assets/bat.svg';
import { useContext } from "react";
import { AudioContext } from "./AudioContext";


// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, closeModal, todayMovie }) => {
  const { isPlaying } = useContext(AudioContext)

  if (!showModal) return null; // Si showModal es false, no muestra nada
  //if (closeModal) return null; // Si showModal es false, no muestra nada


  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <div className='skeleton'>
          <p className='message-win-mobile'>{todayMovie.message_win_mobile}</p>
          <p className='message-win'>{todayMovie.message_win}</p>
        </div>
        <div className='movie-content'>
          <img className="bat_l" src={Bat} alt="Murcielago" />
          <img className='image-movie' src={todayMovie.image_win} alt='Placeholder' />
          <img className="bat_r" src={Bat} alt="Murcielago" />
          <div className='movie-description'>
            <h2 className='movie-title-mobile'>{todayMovie.title_win_mobile}</h2>
            <h2 className='movie-title'>
              {todayMovie.title_win} ({todayMovie.year_win})
            </h2>
            <span className='movie-director'>Director: {todayMovie.director_win}</span>
            <span className='movie-info'>{todayMovie.description_win}</span>
          </div>
        </div>
        <div className='message-box'>
          <img className='cat' src='cat-halloween.gif' alt='gato negro con calabaza' />
          <div className="message-box-content">
            <p className='message-astra'>
              Como recompensa, tienes un <span className='green'>10% de descuento</span> en nuestro servicio de
              portfolio*.
            </p>
            <p className='message-big'>
              ¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror!
            </p>
            <p className='message-astra-advice'>
              *Oferta válida hasta el 1 de noviembre de 2024 con el <span className='green'>código ASTRACODE</span>
            </p>
          </div>
          {isPlaying && <audio autoPlay >
            <source src="aleteo.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          }
        </div>


        <div className='modal-buttons'>
          <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
