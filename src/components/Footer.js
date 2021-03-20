import React from "react"; 
import { 
Box, 
Container, 
Row, 
FooterLink,  
} from "./FooterStyles"; 

const Footer = () => { 
return ( 
	<Box> 
    <br/>
	<Container> 
		<Row> 
			<FooterLink href="#about">About Us</FooterLink> 
			<FooterLink href="#features">Discover</FooterLink> 
			<FooterLink href="#pricing">Explore</FooterLink> 
		</Row>  

    <br/><br/><br/><br/><br/>

    <h6 style={{ color: "#6D7175",
				marginTop: "-50px" }}>© 2021 Wemeet. All Rights Reserved.</h6>
	</Container> 
	</Box> 
); 
}; 
export default Footer; 
