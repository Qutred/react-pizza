import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './scss/app.scss';

import { Header } from './components/';
import { Home, Cart } from './pages';

function App() {
	const [pizzas, SetPizzas] = React.useState([]);

	React.useEffect(() => {
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			SetPizzas(data.pizzas);
		});
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return <Home items={pizzas} />;
						}}
					/>
					<Route path='/cart' component={Cart} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
