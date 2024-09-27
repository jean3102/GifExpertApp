import { Giphy } from '../models/giphy.model';

export const giphyAdapter = (data: Giphy[]) => {
	return data.map((img) => ({
		id: img.id,
		title: img.title,
		images: img.images.downsized.url,
	}));
};
