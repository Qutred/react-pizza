import axios from 'axios';
export const setPizzasAction = (items) => ({
	type: 'SET_PIZZAS',
	payload: items,
});

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
	dispatch(setLoaded(false));
	axios
		.get(
			`/pizzas?${category !== null ? `category=${category}` : ``}&_sort=${sortBy.type}&_order=${
				sortBy.order
			}`,
		)
		.then(({ data }) => {
			dispatch(setPizzasAction(data));
		});
};
