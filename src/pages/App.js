import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

import styled from 'styled-components';

const Main = styled.main`
  	counter-reset: section;
`;

const App = () => (
		<Main>
			<Hero />
			<Projects />
			<About />
			<Skills />
			<Contact />
		</Main>
)

export default App
