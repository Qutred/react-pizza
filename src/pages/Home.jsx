import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components/';

const Home = (props) => {
	const { items } = props;
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					onItemClick={(event) => console.log(event)}
					items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
				/>
				<SortPopup
					items={[
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					]}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items &&
					items.map((pizza) => {
						return <PizzaBlock key={pizza.id} {...pizza} />;
					})}
			</div>
		</div>
	);
};

export default Home;
