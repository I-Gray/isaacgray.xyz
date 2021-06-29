import React, { FC } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import "../assets/css/main.scss"

const Layout = ({ children }) => {
  return(
  <>
	<Navbar />
	{children}
	<Hero />
  </>
  )
}

export default Layout
