// eslint-disable-next-line react/prop-types
const Dummy = ({wrongLetters}) => {
  const calculateErrorNumber = ()=>{
    // eslint-disable-next-line react/prop-types
    if (wrongLetters.length > 14){
      return
    }
    // eslint-disable-next-line react/prop-types
    return wrongLetters.length
  }

  
  return (
    <section className={`dummy error-${calculateErrorNumber()}`}>
      <span className="error-14 tongue"></span>
      <span className="error-13 eye"></span>
      <span className="error-12 eye"></span>
      <span className="error-11 line"></span>
      <span className="error-10 line"></span>
      <span className="error-9 line"></span>
      <span className="error-8 line"></span>
      <span className="error-7 line"></span>
      <span className="error-6 head"></span>
      <span className="error-5 line"></span>
      <span className="error-4 line"></span>
      <span className="error-3 line"></span>
      <span className="error-2 line"></span>
      <span className="error-1 line"></span>
    </section>

  );
};

export default Dummy;