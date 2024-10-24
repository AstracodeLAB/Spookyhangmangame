import { useState, useEffect, useContext } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { allowedCharsRegExp } from './components/alpha';
import { AudioContext } from './components/AudioContext';
import Header from '@components/Header';
import Modal from './components/modal'
import Text from '@components/Text';
import Dummy from '@components/Dummy';
import Footer from '@components/Footer';
import Instructions from '@components/Instructions';
import MoreOptions from '@components/MoreOptions';
import movies from './assets/data';
import './App.scss';
import GifDesktop from './assets/calabazaGif.gif';
import GifMob from './assets/calabazaGifMob.gif';

function App() {
	const [keyword, setKeyword] = useState('');
	const [todayMovie, setTodayMovie] = useState([]);
	const [wrongLetters, setWrongLetters] = useState([]);
	const [correctLetters, setCorrectLetters] = useState([]);
	const [isWinner, setIsWinner] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { isPlaying } = useContext(AudioContext);



	//Aqui pondremos un objeto: cada día el nombre de una peli
	useEffect(() => {
		const spookyMovie = getMovie();
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
		const words = keyword.split(' ');

		return words.map((word, wordIdx) => {
			const letters = word.split('');
			return (
				<div className='word' key={wordIdx}>
					{letters.map((letter, letterIdx) => {
						return (
							<li key={letterIdx} className='letter'>
								{correctLetters.includes(letter) && letter}
							</li>
						);
					})}
				</div>
			);
		});

		// const wordLetters = keyword.split('');
		// //quitar guión cuando es espacio e ignorar la letra ok.
		// return wordLetters.map((letter, index) => {
		// 	if (letter === ' ') {
		// 		return <li key={index} className='noLetter'></li>;
		// 	}
		// 	if (letter !== ' ' && correctLetters.includes(letter)) {
		// 		return (
		// 			<li key={index} className='letter'>
		// 				{letter}
		// 			</li>
		// 		);
		// 	} else {
		// 		return (<>
		// 			<li key={index} className='letter'></li>
		// 		</>);
		// 	}
		// });
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
			return null;
		}
		const date = new Date();
		const today = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
		const todayMovie = movies.find((movie) => movie.day.toString() === today);
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
			<Header text='Spooky Hangman Game' />
			<BrowserRouter>
				<Routes>
					<Route path='/instructions' element={<Instructions />} />
					<Route path='/options' element={<MoreOptions />} />
					<Route
						path='/'
						element={
							<main className='main'>
								<div>
									{!gameOver && !isWinner &&	<Dummy wrongLetters={wrongLetters} />}
								</div>
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
									<div className='spamTryAgain'>
										{/* <div className='containerCalabaza'>
											<div className='containerCalabaza__calabaza'>
												<picture>
													<source media='(min-width: 1024px)' srcSet={GifDesktop} />
													<source media='(min-width: 768px)' srcSet={GifMob} />
													<img className='containerCalabaza__calabaza__gif' src={GifMob} alt='Calabaza' />
												</picture>
											</div>
										</div> */}
										<div className='dummy_dead'>
											<Dummy wrongLetters={wrongLetters} />
										</div>
										<div className='containerGameOver'>
											<p className='containerGameOver__game-over'>Los fantasmas lo celebran... </p>
											<p className='containerGameOver__game-over'>¡todavía puedes derrotarlos! </p>
											<p className='containerGameOver__game-over-retry'>¿Te atreves a intentarlo de nuevo?</p>
											<div className='game-over-cont'>
												<button className='game-over-button' onClick={retry}>
													Volver a intentarlo
												</button>
												<button
													className='game-over-button-contact'
													onClick={() =>
														window.open(
															'https://h6oav78nvip.typeform.com/to/MjgF68AH',
															'_blank'
														)
													}
												>
													¿Quieres una web?
												</button>
											</div>
										</div>
										{isPlaying && (
											<audio autoPlay>
												<source src='evil-laugh1.mp3' type='audio/mp3' />
												Tu navegador no soporta el elemento de audio.
											</audio>
										)}
									</div>
								)}
							</main>
						}
					/>
				</Routes>
			</BrowserRouter>
			<Footer />
			{isPlaying && (
				<audio autoPlay loop>
					<source src='creepy-party.mp3' type='audio/mp3' />
					Tu navegador no soporta el elemento de audio.
				</audio>
			)}
		</div>
	);
}

export default App;
