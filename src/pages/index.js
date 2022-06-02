import React from "react"

import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import App from '../pages/App'


const Index = ({ location }) => (
	<Layout location={location}>
		<App />
	</Layout>
);


Index.propTypes = {
	location: PropTypes.object.isRequired,
};

export default Index;
