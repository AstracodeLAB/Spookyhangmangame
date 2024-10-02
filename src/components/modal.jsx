
const Modal = ({ showModal, closeModal }) => {
  if (!showModal) return null; // Si showModal es false, no muestra nada

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <h2>Este es un modal</h2>
        <p>Aquí puedes poner una descripción o texto adicional.</p>
        <div className="modal-buttons">
          <button onClick={closeModal}>Aceptar</button>
          <button onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;