import { giphyAdapter } from '../adapters/giphy.adapter';
import { getGiphy } from '../services/getGiphy';

describe('test in getGiphy', () => {
	test('should  return array of gifs', async () => {
		const giphy = await getGiphy('goku');
		const res = giphyAdapter(giphy);
		expect(res[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			images: expect.any(String),
		});
	});
});
