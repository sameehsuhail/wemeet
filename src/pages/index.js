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
		family: 'Open Sans',
	}} 
	> 
	<h1 style={{ color: "black", paddingTop: 220, paddingLeft:200,
	textAlign:"center",
				marginTop: "-50px" }}>We Meet. Anywhere.<br/> Anytime</h1>

	<NavBtn style={{paddingRight:200, paddingBottom:100}}> 
	<NavBtnLink to='/landing'>Get Started ➜</NavBtnLink> 
	</NavBtn> 
	</div> 

	
); 
}; 

export default Home;
