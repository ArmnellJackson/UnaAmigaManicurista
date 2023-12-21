import React, { useState } from 'react';
import '../styles/Enlaces.css';
import Blog from './Blog';
import NailArt from './NailArt';
import Tienda from './Tienda';

function Enlaces() {
	const [selectedTab, setSelectedTab] = useState('Blog');

	const renderTab = () => {
		switch (selectedTab) {
			case 'Blog':
				return <Blog />;
			case 'Nail Art':
				return <NailArt />;
			case 'Tienda':
				return <Tienda />;
			default:
				return <Blog />;
		}
	};

	return (
		<>
			<ul className="nav nav-pills nav-fill small" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--tono-1)", "--bs-nav-pills-link-active-color": "#000000", "--bs-nav-pills-link-active-bg": "var(--tono-1)" }}>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${selectedTab === 'Blog' ? 'active' : ''}`} id="home-tab2" onClick={() => setSelectedTab('Blog')} type="button" role="tab" aria-selected="true">Blog</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${selectedTab === 'Nail Art' ? 'active' : ''}`} id="profile-tab2" onClick={() => setSelectedTab('Nail Art')} type="button" role="tab" aria-selected="false">Nail Art</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className={`nav-link ${selectedTab === 'Tienda' ? 'active' : ''}`} id="contact-tab2" onClick={() => setSelectedTab('Tienda')} type="button" role="tab" aria-selected="false">Tienda</button>
				</li>
			</ul>
			{renderTab()}
		</>
	)
}

export default Enlaces;
