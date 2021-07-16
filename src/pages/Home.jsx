import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components/';
import { setCategoryAction, setSortByAction } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = (props) => {
	const items = useSelector(({ pizzas }) => pizzas.items);
	const cartItems = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchPizzas(category, sortBy));
	}, [category, sortBy]);

	const onSelectCategory = React.useCallback((index) => {
		dispatch(setCategoryAction(index));
	}, []);

	const onSelectSortType = React.useCallback((type) => {
		dispatch(setSortByAction(type));
	}, []);

	const handleAddPizzaToCart = (obj) => {
		dispatch(addPizzaToCart(obj));
	};

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup
					activeSortType={sortBy.type}
					onClickSortType={onSelectSortType}
					items={sortItems}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? items.map((pizza) => (
							<PizzaBlock
								onClickAddPizza={handleAddPizzaToCart}
								key={pizza.id}
								{...pizza}
								addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length}
							/>
					  ))
					: Array(12)
							.fill(0)
							.map((_, index) => <PizzaLoadingBlock key={index} />)}
			</div>
		</div>
	);
};

export default Home;
