// components/Footer.tsx
import React from 'react';

const Footer = () => {
	return(
		<Footer classname="bg-gray-900 text-white py-6 mt-12">
			<div className="container mx-auto text-center">
			 <p>&COPY; 2025 PFO. All rights reserved.</p>
			 <div className="flex justify-center sapce-x-6 mt-4">
			 	<a href="#" className="hover:text-blue-400 transition duration-300">Github</a>
			 	<a href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
			 	<a href="#" className="hover:text-blue-400 transition duration-300">X</a>
			 </div>
			</div>
		</header>
	);
};

export default Footer;