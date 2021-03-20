import React from 'react'; 
import { 
	NavBtn, 
	NavBtnLink, 
	} from './NavbarElements'; 

const Home = () => { 
return ( 
	<div 
	style={{ 
		display: 'flex', 
		justifyContent: 'Right', 
		alignItems: 'Right', 
		height: '100vh',
		family: 'Open Sans'
	}} 
	> 
	<h1 id="subtext">We Meet. Anywhere.<br/> Anytime</h1> 

	<NavBtn> 
	<NavBtnLink to='/landing'>Get Started ➜</NavBtnLink> 
	</NavBtn> 
	</div> 

	
); 
}; 

export default Home;
