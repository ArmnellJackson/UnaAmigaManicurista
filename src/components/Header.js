import React from 'react';
// import Logo from '../img;
import '../styles/Header.css';

function Header() {
	return (
		<>
			<header id="inicio">
				<nav className="navbar navbar-expand-lg bg-transparent">
					<div className="container-fluid">
						<a className="navbar-brand" href="https://www.instagram.com/newkarlahg?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noreferrer">
							<a class="navbar-brand fs-1" href="https://www.instagram.com/newkarlahg?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noreferrer">AM</a>
							{/* <img src={Logo} alt="logo AG" width="36" /> */}
						</a>
						<section className="social-header">
							<a href="https://www.instagram.com/newkarlahg?igshid=YTQwZjQ0NmI0OA==" target="_blank" rel="noreferrer">
								<i className="bi bi-instagram" style={{ color: '#000000' }}></i>
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