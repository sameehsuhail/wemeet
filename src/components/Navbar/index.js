import React from 'react'; 
import { 
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink, 
} from './NavbarElements'; 

const Navbar = () => { 
return ( 
	<> 
	<Nav> 
		<Bars /> 

		<NavMenu> 

		<NavLink to='/homepage' id="logo" activeStyle> 
		<h1>WeMeet</h1>
		</NavLink> 

        {/* <NavLink to='/something' activeStyle> 
			Something
		</NavLink>  */}
		<NavLink to='/features' activeStyle> 
			Features
		</NavLink> 
		<NavLink to='/pricing' activeStyle> 
			Pricing
		</NavLink> 
		<NavLink to='/about' activeStyle> 
			About
		</NavLink> 
		
		</NavMenu> 

		<NavBtn> 
		<NavBtnLink to='/login'>Log In</NavBtnLink> 
		</NavBtn> 
        <NavBtn> 
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink> 
		</NavBtn> 
	</Nav> 
	</> 

	
); 
}; 

export default Navbar;
