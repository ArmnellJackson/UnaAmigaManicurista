import React from 'react';
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

				<section className="autor">
					<a href="https://www.armnellgomez.com/" target="_blank" rel="noreferrer">
						<p>Creado por </p>
						<i className="bi bi-info-circle" style={{ color: '#000000' }}></i>
					</a>
				</section>

			</footer>
		</>
	)
}

export default Footer;