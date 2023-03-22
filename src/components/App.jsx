import '../styles/global.css';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import React from 'react';

const App = () => {
	return (
		<Layout>
			<Login />
		</Layout>
	);
};

export default App;
