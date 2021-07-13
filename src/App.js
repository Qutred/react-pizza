import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { setPizzasAction } from './redux/actions/pizzas';
import { useDispatch } from 'react-redux';
import './scss/app.scss';

import { Header } from './components/';
import { Home, Cart } from './pages';

function App() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzasAction(data));
		});
	}, []);

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
