import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import Head from './Head'
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Loader from './Loader';

import PropTypes from "prop-types";

// https://eneaxharja.com/gatsby-smooth-scrolling/

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  	const isHome = location.pathname === "/";
  	const [isLoading, setIsLoading] = useState(isHome);

	  const handleExternalLinks = () => {
		const allLinks = Array.from(document.querySelectorAll('a'));
		if (allLinks.length > 0) {
		  allLinks.forEach(link => {
			if (link.host !== window.location.host) {
			  link.setAttribute('rel', 'noopener noreferrer');
			  link.setAttribute('target', '_blank');
			}
		  });
		}
	  };
	
	  useEffect(() => {
		if (isLoading) {
		  return;
		}
	
		if (location.hash) {
		  const id = location.hash.substring(1); // location.hash without the '#'
		  setTimeout(() => {
			const el = document.getElementById(id);
			if (el) {
			  el.scrollIntoView();
			  el.focus();
			}
		  }, 0);
		}
	
		handleExternalLinks();
	  }, [isLoading]);

  return (
    <>
	  <Head />

      <div id="root">
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {isLoading && isHome ? (
            <Loader finishLoading={() => setIsLoading(false)} />
          ) : 
		  (
            <StyledContent>
			  <Navbar isHome={isHome} />
              {children}
              <Footer />
            </StyledContent>
        )} 
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
