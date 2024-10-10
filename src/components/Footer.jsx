// import { NavLink } from "react-router-dom";
import { IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook, IconBrandThreads } from '@tabler/icons-react';

const Footer = () => {
	return (
		<footer className='footer'>
			<small className='footer__copy'>©Astracodelab</small>
			<div className='footer__content'>
				<p>¿Necesitas una web?</p>
				<div className='footer__socials'>
					<a href='https://www.linkedin.com/company/astracodelab/' target='_blank' rel='noopener noreferrer'>
          <IconBrandLinkedin stroke={2} />
					</a>
					<a href='https://www.instagram.com/astracodelab/' target='_blank' rel='noopener noreferrer'>
          <IconBrandInstagram stroke={2} />
					</a>
					<a href='https://m.facebook.com/people/Astracodelab/61564205213789/' target='_blank' rel='noopener noreferrer'>
          <IconBrandFacebook stroke={2} />
					</a>
					<a href='https://www.threads.net/@astracodelab' target='_blank' rel='noopener noreferrer'>
          <IconBrandThreads stroke={2} />
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
