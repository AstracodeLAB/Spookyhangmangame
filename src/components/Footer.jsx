// import { NavLink } from "react-router-dom";
import facebookLogo from '../assets/facebook.png';
import instagramLogo from '../assets/instagram.png';
import linkedinLogo from '../assets/linkedin.png';
import threadsLogo from '../assets/threads.png';

const Footer = () => {
	return (
		<footer className='footer'>
			<small className='footer__copy'>©Astracodelab</small>
			<div className='footer_content'>
				<p className='footer__text'>¿Quieres una web?</p>
				<div className='footer__icons'>
					<a href='https://www.facebook.com/people/Astracodelab/61564205213789/?_rdr' target='_blank' rel='noopener noreferrer'>
						<img className='footer__icon' src={facebookLogo} alt='Logo de Facebook' />
					</a>
					<a href='https://www.instagram.com/astracodelab/' target='_blank' rel='noopener noreferrer'>
						<img className='footer__icon' src={instagramLogo} alt='Logo de Instagram' />
					</a>
					<a href='https://www.linkedin.com/company/astracodelab' target='_blank' rel='noopener noreferrer'>
						<img className='footer__icon' src={linkedinLogo} alt='Logo de LinkedIn' />
					</a>
					<a href='https://www.threads.net/@astracodelab' target='_blank' rel='noopener noreferrer'>
						<img className='footer__icon footer__icon--threads' src={threadsLogo} alt='Logo de Threads' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

// <nav>
//   <ul>
//     <li className="footer__menu-item">
//       <NavLink className={(isActive) =>
//         "footer__menu-link" + (isActive ? "" : "active")
//       } to="/">A jugar</NavLink>
//     </li>
//     <li className="footer__menu-item">
//       <NavLink className={(isActive) =>
//         "footer__menu-link" + (isActive ? "" : "active")
//       } to="/instructions">¿Cómo se juega?</NavLink>
//     </li>
//     <li className="footer__menu-item">
//       <NavLink className={(isActive) =>
//         "footer__menu-link" + (isActive ? "" : "active")
//       } to="/options">Más opciones</NavLink>
//     </li>

//   </ul>
// </nav>
