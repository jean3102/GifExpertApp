import React, { Suspense, useState } from 'react';
import SearchGiphy from './components/SearchGiphy';
import './styles/App.css';

const LazyGiphyContainer = React.lazy(
	() => import('./components/GiphyContainer')
);

const App = () => {
	const [category, setCategory] = useState('');

	const searchByCategory = (newCategory: string) => {
		if (category === newCategory) return;
		setCategory(newCategory);
	};

	return (
		<main>
			<SearchGiphy searchByCategory={searchByCategory} />
			{category.length > 0 && (
				<>
					<Suspense fallback={<h1>Loading....</h1>}>
						<LazyGiphyContainer category={category} />
					</Suspense>
				</>
			)}
		</main>
	);
};

export default App;
