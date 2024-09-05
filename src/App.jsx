
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

  return (
    <div className="page">
      <Header text="Juego del ahorcado" />
      <BrowserRouter>
        <Routes>
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/options" element={<MoreOptions />} />
          <Route
            path="/"
            element={
              <main className="main">
                <Text
                  renderSolutionLetters={renderSolutionLetters}
                  renderWrongLetters={renderWrongLetters}
                  value={chart}
                  handleLastLetter={handleLastLetter}
                />
                <Dummy />
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