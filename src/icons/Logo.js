import React from 'react';
import logo from "../images/logo.svg"

const Logo = ({size}) => (
	<img src={logo} alt="Logo" className="nav-logo" height={size} width={size}/>
);

export default Logo;