import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './pages'; 
import About from './pages/about';  
import SignUp from './pages/signup'; 
import LogIn from './pages/login'; 
import Features from './pages/features';
import Pricing from './pages/pricing';
// import Something from './pages/something';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Footer from './components/Footer';

function App() { 
return ( 
	<Router> 
	<Navbar /> 
	<Switch> 
		<Route path='/' exact component={Home} /> 
		<Route path='/homepage' exact component={Home} /> 
		<Route path='/about' component={About} /> 
		<Route path='/pricing' component={Pricing} /> 
		<Route path='/features' component={Features} /> 
		{/* <Route path='/something' component={Something} />  */}
    	<Route path='/login' component={LogIn} /> 
		<Route path='/signup' component={SignUp} /> 
		<Route path='/landing' component={Landing}/>
		<Route path='/dashboard' component={Dashboard} />
	</Switch> 
	<Footer/>
	</Router> 
	
); 
} 

export default App; 
