import React, { useState } from 'react';
import { SearchGiphyProps } from './models/GiphyProps.model';
import './styles/searchGiphy.css';
const SearchGiphy = ({ searchByCategory }: SearchGiphyProps) => {
	const [search, setSearch] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (search.length === 0) return;
		searchByCategory(search);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setSearch(value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleSearch}
				type="search"
			/>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchGiphy;
