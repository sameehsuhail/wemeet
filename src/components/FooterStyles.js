import styled from 'styled-components'; 

export const Box = styled.div` 
padding: 30px 30px; 
background: #343A40; 
position: absolute; 
bottom: 0; 
width: 100%; 


@media (max-width: 1000px) { 
	padding: 70px 30px; 
} 
`; 

export const Container = styled.div` 
	display: flex; 
	flex-direction: column; 
	justify-content: center; 
	max-width: 1000px; 
	margin: 0 auto; 
	/* background: red; */
` 
 

export const Row = styled.div` 
display: grid; 
grid-template-columns: repeat(auto-fill, 
						minmax(185px, 1fr)); 
grid-gap: 2px; 

@media (max-width: 1000px) { 
	grid-template-columns: repeat(auto-fill, 
						minmax(200px, 1fr)); 
} 
`; 

export const FooterLink = styled.a` 
color: #fff; 
margin-bottom: 20px; 
font-size: 14px; 
text-decoration: none; 

&:hover { 
	color: green; 
	transition: 200ms ease-in; 
} 
`; 
