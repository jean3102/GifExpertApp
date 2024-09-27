import { useEffect, useState } from 'react';
import { getGiphy } from '../services/getGiphy';
import { giphyAdapter } from '../adapters/giphy.adapter';
import { GiphyImages } from '../models/giphy.model';

export const useGetGiphy = (category: string) => {
	const [images, setImages] = useState<GiphyImages>([]);
	const [error, setError] = useState<any>('');

	const getImages = async () => {
		try {
			const newImages = await getGiphy(category);
			if (!newImages)
				throw new Error('An error occurred while searching for images');

			const gifs = giphyAdapter(newImages);
			setImages(gifs);
		} catch (error) {
			setError(error);
			if (error instanceof Error) {
			}
		}
	};

	useEffect(() => {
		getImages();
	}, [category]);
	return { images, error };
};
