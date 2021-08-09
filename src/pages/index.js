import * as React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

const Main = styled.main`
  	counter-reset: section;
`;

const IndexPage = ({ location }) => (
	<Layout location={location}>
		<Main>
			<Hero />
			<Projects />
			<About />
			<Contact />
		</Main>
	</Layout>
);


IndexPage.propTypes = {
	location: PropTypes.object.isRequired,
};

export default IndexPage;
