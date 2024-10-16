import { useState, useEffect, useContext, useRef, createContext } from 'react';
import Header from '@components/Header';
import Text from '@components/Text';
import Footer from '@components/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Instructions from '@components/Instructions';
import MoreOptions from '@components/MoreOptions';
import Dummy from '@components/Dummy';
import Modal from '@components/Modal';
import movies from './assets/data';
import './App.scss';
import { allowedCharsRegExp } from './components/alpha';
import { AudioContext } from './components/AudioContext';


function App() {
	const [keyword, setKeyword] = useState('');
	const [todayMovie, setTodayMovie] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [isWinner, setIsWinner] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { isPlaying } = useContext(AudioContext)

	console.log(isPlaying)

	//Aqui pondremos un objeto: cada día el nombre de una peli
	useEffect(() => {
		const spookyMovie = getMovie();
		console.log(spookyMovie.movie);
		setKeyword(spookyMovie.movie);
		setTodayMovie(spookyMovie);

	}, []);

	const processGameStatus = () => {
		const gameOver = wrongLetters.length > 13;
		//Si has ganado o no tienes letras no hagas nada.
		if (isWinner || correctLetters.length === 0) return gameOver;
		//spliteo keyword y le quito el espacio. Luego tengo que saber cuantas
		//letras únicas son.
		const movie = keyword.split('').filter((letter) => letter !== ' ');
		const movieLetters = [...new Set(movie)];
		const correctLettersNoRepeat = [...new Set(correctLetters)];
		console.log('movieLetters', movieLetters);
		console.log('correctLetters', correctLettersNoRepeat);
		if (movieLetters.length === correctLettersNoRepeat.length) {
			const result = movie.every((el) => correctLettersNoRepeat.includes(el));
			if (result) {
				setIsWinner(true);
				setShowModal(true);
			}
		}
		return gameOver;
	};

	//Mostrar las letras correctas
	const renderSolutionLetters = () => {
		const wordLetters = keyword.split('');
		//quitar guión cuando es espacio e ignorar la letra ok.
		return wordLetters.map((letter, index) => {
			if (letter === ' ') {
				return <li key={index} className='noLetter'></li>;
			}
			if (letter !== ' ' && correctLetters.includes(letter)) {
				return (
					<li key={index} className='letter'>
						{letter}
					</li>
				);
			} else {
				return <li key={index} className='letter'></li>;
			}
		});
	};

	//Mostrar las letras erróneas
	const renderWrongLetters = () => {
		return wrongLetters.map((error, index) => {
			return (
				<li key={index} className='letter'>
					{error}
				</li>
			);
		});
	};

	const handleLastLetter = (lastInput) => {
		if (lastInput.match(allowedCharsRegExp)) {
			//setChart(lastInput);
			if (lastInput !== '') {
				if (keyword.includes(lastInput)) {
					setCorrectLetters([...correctLetters, lastInput]);
				} else {
					setWrongLetters([...wrongLetters, lastInput]);
				}
			}
		}
	};

	const getMovie = () => {
		if (!movies || !Array.isArray(movies)) {
			console.error('movies no es un array válido.');
			return null;
		}
		const date = new Date();
		const today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
		const todayMovie = movies.find((movie) => movie.day.toString() === today);
		// console.error("movies dentro de getmovie", todayMovie)
		return todayMovie;
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setCorrectLetters([]);
		setWrongLetters([]);
		setIsWinner(false);
	};

	const retry = () => {
		setCorrectLetters([]);
		setWrongLetters([]);
		setIsWinner(false);
		setShowModal(false);
	};

	const gameOver = processGameStatus();

	return (

		<div className='page'>
			<Header 
			text='Spooky Hangman Game'
			/>
			<BrowserRouter>
				<Routes>
					<Route path='/instructions' element={<Instructions />} />
					<Route path='/options' element={<MoreOptions />} />
					<Route
						path='/'
						element={
							<main className='main'>
								<Dummy wrongLetters={wrongLetters} />
								{!gameOver && !isWinner && (
									<Text
										renderSolutionLetters={renderSolutionLetters}
										renderWrongLetters={renderWrongLetters}
										//value={chart}
										handleLastLetter={handleLastLetter}
									/>
								)}
								{isWinner ? (
									<Modal
										todayMovie={todayMovie}
										showModal={showModal}
										closeModal={() => {
											handleCloseModal();
										}}
										gameOver={gameOver}
									/>
								) : null}
								{gameOver && (
									<div>
										<div className='containerCalabaza'>
											<div className='containerCalabaza_calabaza'>
												<img
													className='containerCalabaza_calabaza_gif'
													src='https://i.pinimg.com/originals/88/8c/2a/888c2a5b2f0a7a22da8d82b56ca2828d.gif'
												></img>
											</div>
										</div>
										<p className='game-over'>Los fantasmas lo celebran... </p>
										<p className='game-over'>¡todavía puedes derrotarlos! </p>
										<p className='game-over-retry'>¿Te atreves a intentarlo de nuevo?</p>
										<div className='game-over-cont'>
											<button className='game-over-button' onClick={retry}>
												Volver a intentarlo
											</button>
										</div>
										{isPlaying && <audio autoPlay>
											<source src='evil-laugh1.mp3' type='audio/mp3' />
											Tu navegador no soporta el elemento de audio.
										</audio>
										}
									</div>
								)}
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
			{isPlaying && <audio autoPlay loop>
				<source src='creepy-party.mp3' type='audio/mp3' />
				Tu navegador no soporta el elemento de audio.
			</audio>
			}
		</div>
	
	);
}

export default App;
