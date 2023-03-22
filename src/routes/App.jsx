import '../styles/global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../containers/Layout';
import Login from '../containers/Login';
import React from 'react';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Layout>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />
					<Route
						exact
						path="/recovery-password"
						element={<RecoveryPassword />}
					/>
					<Route element={<NotFund />} />
				</Layout>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
