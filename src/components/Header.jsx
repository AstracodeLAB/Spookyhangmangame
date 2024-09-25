const Header = (props) => {
  return (
    <header className="header">
      <img className="logo" src="./Whitelogolab.png"></img>
      <h1 className="header__title">{props.text}</h1>
    </header>
  );
};

export default Header;