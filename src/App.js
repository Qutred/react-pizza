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
		axios.get('http://localhost:3000/db.json').then(({ data }) => {
			dispatch(setPizzasAction(data.pizzas));
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

// class App extends React.Component {
// 	componentDidMount() {
// 		axios.get('http://localhost:3000/db.json').then(({ data }) => {
// 			this.props.setPizzas(data.pizzas);
// 		});
// 	}
// 	render() {
// 		console.log(this.props);
// 		return (
// 			<div className='wrapper'>
// 				<Header />
// 				<div className='content'>
// 					<Switch>
// 						<Route
// 							exact
// 							path='/'
// 							render={() => {
// 								return <Home items={this.props.items} />;
// 							}}
// 						/>
// 						<Route path='/cart' component={Cart} />
// 					</Switch>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = (state) => {
// 	return {
// 		items: state.pizzas.items,
// 		filter: state.filters,
// 	};
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		setPizzas: (items) => dispatch(setPizzasAction(items)),
// 	};
// };
export default App;
