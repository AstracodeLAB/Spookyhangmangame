import { useState } from 'react';
import { allowedCharsRegExp } from './alpha';

const Text = (props) => {
 
  const [char, setChar] = useState('')
  
  const handleInput = (ev) => {
    console.log(ev.target.value)
    // eslint-disable-next-line react/prop-types
    if (!ev.target.value.match(allowedCharsRegExp)) return
    //si ha pasado menos de un segundo no hagas nada
    setChar(ev.target.value.toUpperCase())

    props.handleLastLetter(ev.target.value.toUpperCase());
  };
  setTimeout(() => {
    setChar(''); 
  }, 300); 


	const handleOnSumbit = (ev) => {
		ev.preventDefault();
	};
	return (
		<section className='sectionText'>
      <article className='sectionText_containerWrite'>
			<form className='form' onSubmit={handleOnSumbit}>
				<label className='title1' htmlFor='last-letter'>
					Escribe una letra:
				</label>
				<input
					onChange={() => {}}
					value={char}
					onInput={handleInput}
					autoComplete='off'
					className='form__input'
					maxLength='1'
					type='text'
					name='last-letter'
					id='last-letter'
					pattern='^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$'
				/>
			</form>
      </article>
			<article className='sectionText_containerLetters'>
				<div className='error'>
					<h2 className='title'>Letras falladas:</h2>
					<ul className='letters'>{props.renderWrongLetters()}</ul>
				</div>
				<div className='solution'>
					<h2 className='title'>Solución:</h2>
					<ul className='letters'>{props.renderSolutionLetters()}</ul>
				</div>
			</article>
		</section>
	);
};

export default Text;
