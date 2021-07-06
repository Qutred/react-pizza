import React from 'react';

const Categories = (props) => {
	const { items } = props;
	const [activeItem, setActiveItem] = React.useState(0);

	const onSelectItem = (index) => {
		setActiveItem(index);
	};
	return (
		<div className='categories'>
			<ul>
				{items &&
					items.map((item, index) => (
						<li
							className={activeItem === index ? 'active' : ''}
							onClick={() => onSelectItem(index)}
							key={`${item}_${index}`}>
							{item}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Categories;
