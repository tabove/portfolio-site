// components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return(
		<header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 fixed top-0 w-full shadow-lg-z-50">
			<div className="container mx-auto flex justify-between items-center px-4">
			 <h1 className="test-3xl font-extrabold">PF0</h1>
			 <nav>
			 	<ul className="flex space-x-6">
			 		<li><Link to="/" className="hover:text-gray-200 transition duration-300">HOME</Link></li>
			 		<li><Link to="/work" className="hover:text-gray-200 transition duration-300">WORK</Link></li>
			 		<li><Link to="/about" className="hover:text-gray-200 transition duration-300">ABOUT</Link></li>
			 	</ul>
			 </nav>
			</div>
		</header>
	);
};

export default Header;