
// eslint-disable-next-line react/prop-types
const Modal = ({ showModal, closeModal, todayMovie }) => {
  if (!showModal) return null; // Si showModal es false, no muestra nada
  //if (closeModal) return null; // Si showModal es false, no muestra nada
  console.log('ESTOY EN LA MODAL', todayMovie)


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="skeleton">
          <img className="cat" src="cat-halloween.gif" alt="gato negro con calabaza"/>
          <p className="message-win">{todayMovie.message_win_mobile}</p>
          </div>
          <div className="movie-content">
          <img className="image-movie" src={todayMovie.image_win} alt="Placeholder" />
        <div className="movie-description">
          <h2 className="movie-title">{todayMovie.title_win_mobile}</h2>
          <span className="movie-director">Director: {todayMovie.director_win}</span>
          <span className="movie-info">{todayMovie.description_win}</span>
        </div>
        <div className="message-box">
          <p className="message-astra">Como recompensa, tienes un <span className="green">10% de descuento</span> en nuestro servicio de portfolio*.</p>
          <p className="message-big">¡Esta es tu oportunidad para destacar como un verdadero superviviente del terror!</p>
          <p className="message-astra-advice">*Oferta válida hasta el 1 de noviembre de 2024 con el <span className="green">código ASTRACODE</span></p>
        </div>
        
       </div>
        <div className="modal-buttons">
         <button onClick={closeModal}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;