import React from 'react';
import logoGenki from './logoGenki.png';


function Navbar (){
    return (
        <nav className="navbar navbar-dark  bg-dark">
			<a className="navbar-brand" href="http://localhost:3000/">
			<img src={logoGenki} height="50" className="d-inline-block align-center" alt= "logo"/>
			</a>
			<div>
				<h3 className= "h3 text-white-800-center">DASHBOARD</h3>
			</div>

		</nav>
    );
}

export default Navbar;