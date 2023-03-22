import '../styles/global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NotFund from '../pages/NotFund';
import React from 'react';
import RecoveryPassword from '../containers/RecoveryPassword';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/login" element={<Login />} />{' '}
					<Route
						exact
						path="/recovery-password"
						element={<RecoveryPassword />}
					/>
					<Route path="*" element={<NotFund />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
