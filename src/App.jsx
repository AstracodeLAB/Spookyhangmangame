
import { useState, useEffect } from "react";
import Header from "@components/Header";
import Text from "@components/Text";
import Footer from "@components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Instructions from "@components/Instructions";
import MoreOptions from "@components/MoreOptions";
import Dummy from "@components/Dummy";
import "./App.scss"

function App() {
  const [keyword, setKeyword] = useState("");
  const [chart, setChart] = useState("");
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);


  //Aqui pondremos un objeto: cada día el nombre de una peli
  useEffect(() => {
    
    setKeyword('manolo');
  
  }, []);

  //Mostrar las letras correctas
  const renderSolutionLetters = () => {
    const wordLetters = keyword.split("");
    return wordLetters.map((letter, index) => {
      if (correctLetters.includes(letter)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  //Mostrar las letras erróneas
  const renderWrongLetters = () => {
    return wrongLetters.map((error, index) => {
      return (
        <li key={index} className="letter">
          {error}
        </li>
      );
    });
  };

  const handleLastLetter = (lastInput) => {
    if (lastInput.match("^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$")) {
      setChart(lastInput);
      if (lastInput !== "") {
        if (keyword.includes(lastInput)) {
          setCorrectLetters([...correctLetters, lastInput]);
        } else {
          setWrongLetters([...wrongLetters, lastInput]);
        }
      }
    }
  };

  const gameOver = wrongLetters.length > 12

  return (
    <div className="page">
      <Header text="Spooky Hangman Game" />
      <BrowserRouter>
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/options" element={<MoreOptions />} />
          <Route
            path="/"
            element={
              <main className="main">
                {!gameOver && (<Text
                  renderSolutionLetters={renderSolutionLetters}
                  renderWrongLetters={renderWrongLetters}
                  value={chart}
                  handleLastLetter={handleLastLetter}
                />)}
                {gameOver && (
                  <div>
                  <div>Game over</div>
                  <div className="calabaza">
                      <img className="calabaza_gif" src="https://i.pinimg.com/originals/88/8c/2a/888c2a5b2f0a7a22da8d82b56ca2828d.gif"></img>
                    </div>
                  </div>
                )}
                <Dummy 
                  wrongLetters={wrongLetters}/>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;