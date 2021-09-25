import * as React from "react"
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const Main = styled.main`
  	counter-reset: section;
`;

const Index = ({ location }) => (
	<Layout location={location}>
		<Main>
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Contact />
		</Main>
	</Layout>
);


Index.propTypes = {
	location: PropTypes.object.isRequired,
};

export default Index;
