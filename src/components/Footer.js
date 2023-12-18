import React from 'react';
// import Logo from '../img';
import '../styles/Footer.css';

function Footer() {
	return (
		<>
			<footer>
				<section className="social-footer">
					<a href="https://www.instagram.com/newkarlahg?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noreferrer">
						<i className="bi bi-instagram" style={{ color: '#000000' }}></i>
					</a>
				</section>

				<div>
					<section className="autor">
						<a href="https://www.armnellgomez.com/" target="_blank" rel="noreferrer">
							<p>Creado por Armnell Gómez</p>
						</a>
					</section>
				</div>
			</footer>
		</>
	)
}

export default Footer;