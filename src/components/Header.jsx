import { useContext } from "react";
import { AudioContext } from "./AudioContext";

const Header = (props) => {
  const { toggleAudio ,  isPlaying } = useContext(AudioContext)


  return (
    
    <header className="header">
      <img className="logo" src="./Whitelogolab.png"></img>
      <h1 className="header__title">{props.text}</h1>
      <div className='header__intro'>
				<p className='header__paragraph header__paragraph--1'>
          Te retamos a adivinar películas de miedo en este juego del ahorcado (versión Halloween). Activa el audio para disfrutar mejor de la experiencia. 
          <button
            onClick={toggleAudio}>{isPlaying ? ('🔊') : ('🔇')}
          </button>  
				</p>
      
				<p className='header__paragraph header__paragraph--2'>Cada día una nueva peli y una sorpresa especial si la adivinas...</p>
        <p className='header__paragraph header__paragraph--3'>¡Juega al ahorcado y descubre una nueva peli de miedo cada día! Activa el audio para una mejor experiencia. 
          <button
            onClick={toggleAudio}>{isPlaying ? ('🔊') : ('🔇')}
          </button> 
        </p>
			</div>
    </header>
  );
};

export default Header;