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
		justifyContent: 'Left', 
		flexDirection: 'column',
		alignItems: 'Left', 
		height: '100vh',
		family: 'Open Sans',
	}} 
	> 
	<h1 style={{ color: "black", paddingBottom: 10, paddingTop: 150, paddingLeft:200,
	textAlign:"left",
				marginTop: "-50px" }}>We Meet. Anywhere.</h1><br/> 

		<h1 style={{
			color: "black", paddingLeft: 310, paddingBottom: 90,
			textAlign: "left",
			marginTop: "-50px"
		}}> Anytime</h1>

	<NavBtn style={{paddingLeft:280, paddingBottom:100}}> 
	<NavBtnLink to='/landing'>Get Started ➜</NavBtnLink> 
	</NavBtn> 
	</div> 

	
); 
}; 

export default Home;
