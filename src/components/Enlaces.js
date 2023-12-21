import React, { useState } from 'react';
import '../styles/Enlaces.css';

function Enlaces() {
	const [selectedTab, setSelectedTab] = useState('Proyectos');

	// const renderTab = () => {
	//     switch (selectedTab) {
	//         case 'Proyectos':
	//             return <Proyectos />;
	//         case '¿Quien Soy?':
	//             return <QuienSoy />;
	//         case 'Contacto':
	//             return <Contacto />;
	//         default:
	//             return <Proyectos />;
	//     }
	// };

	return (
		<>
			<ul className="nav nav-pills nav-fill small" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--tono-1)", "--bs-nav-pills-link-active-color": "#000000", "--bs-nav-pills-link-active-bg": "var(--tono-1)" }}>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${selectedTab === 'Proyectos' ? 'active' : ''}`} id="home-tab2" onClick={() => setSelectedTab('Proyectos')} type="button" role="tab" aria-selected="true">Blog</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${selectedTab === '¿Quien Soy?' ? 'active' : ''}`} id="profile-tab2" onClick={() => setSelectedTab('¿Quien Soy?')} type="button" role="tab" aria-selected="false">Nail Art</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${selectedTab === 'Contacto' ? 'active' : ''}`} id="contact-tab2" onClick={() => setSelectedTab('Contacto')} type="button" role="tab" aria-selected="false">Tienda</button>
				</li>
			</ul>
			{/* {renderTab()} */}
		</>
	)
}

export default Enlaces;
