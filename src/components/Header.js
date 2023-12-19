import React from 'react';
// import Logo from '../img;
import '../styles/Header.css';

function Header() {
	return (
		<>
			<header id="inicio">
				<nav className="navbar navbar-expand-lg bg-transparent">
					<div className="container-fluid">
						<div className="navbar-brand">
							<h2 className="navbar-brand fs-1">AM</h2>
							{/* <img src={Logo} alt="logo AG" width="36" /> */}
						</div>
						<section className="social-header">
							<a href="https://www.instagram.com/unaamigamanicurista?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noreferrer">
								<i className="bi bi-instagram" style={{ color: '#000000' }}></i>
							</a>

							<a href="https://www.instagram.com/unaamigamanicurista?igshid=NGVhN2U2NjQ0Yg==" target="_blank" rel="noreferrer">
								<i className="bi bi-facebook" style={{ color: '#000000' }}></i>
							</a>

							<a href="https://www.tiktok.com/@unaamigamanicurista" target="_blank" rel="noreferrer">
								<i className="bi bi-tiktok" style={{ color: '#000000' }}></i>
							</a>

							<a href="https://www.tiktok.com/@unaamigamanicurista" target="_blank" rel="noreferrer">
								<i className="bi bi-whatsapp" style={{ color: '#000000' }}></i>
							</a>
						</section>
					</div>
				</nav>

				{/* <section>
					<h1>Una Amiga Manicurista</h1>
					<h2>NAIL ART</h2>
				</section> */}
			</header>
		</>
	)
}

export default Header;