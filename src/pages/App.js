import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Head from '../components/Head';
import Experience from '../components/Experience';

import styled from 'styled-components';
// import Experience from '../components/Experience';

const Main = styled.main`
  	counter-reset: section;
`;

const App = () => (
	<>
		<Head />
		<Main>
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Experience />
			<Contact />
		</Main>
	</>
)

export default App
