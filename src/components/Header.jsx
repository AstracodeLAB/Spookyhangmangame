const Header = (props) => {
  return (
    <header className="header">
      <img className="logo" src="./Whitelogolab.png"></img>
      <h1 className="header__title">{props.text}</h1>
      <div className='header__intro'>
				<p className='header__paragraph header__paragraph--1'>
					Te retamos a adivinar películas de miedo en este juego del ahorcado (versión Halloween).
				</p>
				<p className='header__paragraph header__paragraph--2'>Cada día una nueva peli y una sorpresa especial si la adivinas...</p>
				<p className='header__paragraph header__paragraph--3'>¡Juega al ahorcado descubriendo cada día una nueva peli de miedo y gana una sorpresa!</p>
			</div>
    </header>
  );
};

export default Header;