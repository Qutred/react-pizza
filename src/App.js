import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './scss/app.scss';

import { Header } from './components/';
import { Home, Cart } from './pages';

function App() {
	const dispatch = useDispatch();

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/cart' component={Cart} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
