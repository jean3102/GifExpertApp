import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SearchGiphy from '../SearchGiphy';
import { vi } from 'vitest';

describe('test in <SearchGiphy/>', () => {
	let input: HTMLInputElement;
	let submit: HTMLButtonElement;
	const searchByCategoryMock = vi.fn();

	beforeEach(() => {
		render(<SearchGiphy searchByCategory={searchByCategoryMock} />);
		input = screen.getByRole('searchbox');
		submit = screen.getByRole('button', {
			name: /search/i,
		});
	});

	afterAll(cleanup);

	test('check when user gets values by typing', () => {
		fireEvent.input(input, { target: { value: 'dragon ball' } });
		expect(input.value).toEqual('dragon ball');
	});

	test('should call searchCategory  when form is submitted with valid input', () => {
		fireEvent.change(input, { target: { value: 'dragon ball' } });
		fireEvent.click(submit);
		expect(searchByCategoryMock).toHaveBeenCalledWith('dragon ball');
	});
});
