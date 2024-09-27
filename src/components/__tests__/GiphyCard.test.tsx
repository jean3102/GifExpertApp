import { render, screen } from '@testing-library/react';
import GiphyCard from '../GiphyCard';
describe('test in <GiphyCard/>', () => {
	test('check if list of images if rendered', () => {
		const images = [
			{
				id: 'e2tSgEk1k8Baw',
				title: 'goku GIF',
				images:
					'https://media0.giphy.com/media/e2tSgEk1k8Baw/giphy-downsized.gif?cid=da6cadaabdhz6ez5kp72123o3ecrptspzsaxes9idjww620l&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g',
			},
			{
				id: 'U3UP4fTE6QfuoooLaC',
				title: 'Dragon Ball GIF by Toei Animation',
				images:
					'https://media2.giphy.com/media/U3UP4fTE6QfuoooLaC/giphy.gif?cid=da6cadaabdhz6ez5kp72123o3ecrptspzsaxes9idjww620l&ep=v1_gifs_search&rid=giphy.gif&ct=g',
			},
			{
				id: 'cb9aF9tDyiRkYbz3BX',
				title: 'Dragon Ball Kefla GIF by Toei Animation',
				images:
					'https://media1.giphy.com/media/cb9aF9tDyiRkYbz3BX/giphy-downsized.gif?cid=da6cadaabdhz6ez5kp72123o3ecrptspzsaxes9idjww620l&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g',
			},
			{
				id: '12KDixncjK6l7G',
				title: 'goku GIF',
				images:
					'https://media4.giphy.com/media/12KDixncjK6l7G/giphy.gif?cid=da6cadaabdhz6ez5kp72123o3ecrptspzsaxes9idjww620l&ep=v1_gifs_search&rid=giphy.gif&ct=g',
			},
		];

		render(<GiphyCard images={images} />);

		const list = screen.getAllByRole('listitem');
		expect(list).toHaveLength(4);
	});
});
