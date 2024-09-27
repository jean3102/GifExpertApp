import { render, screen } from '@testing-library/react';
import GiphyContainer from '../GiphyContainer';

describe('test in <GiphyContainer/>', () => {
	test('check if title if render when pass category', () => {
		const category = 'Dragon Ball';
		
		render(<GiphyContainer category={category} />);
		const title = screen.getByRole('heading', { level: 1 }).innerHTML;
		expect(title).toBe(category);
	});
});
