import React from 'react'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Landing = () => { 
return ( 
	<div 
	style={{ 
		display: 'flex', 
		justifyContent: 'Right', 
		alignItems: 'Right', 
		height: '100vh'
	}} 
	> 
	<h1>Landing</h1> 
    <Calendar />
	</div> 
); 
}; 

export default Landing; 
