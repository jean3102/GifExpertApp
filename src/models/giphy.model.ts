import { giphyAdapter } from "../adapters/giphy.adapter";

export interface Giphy {
	id: string;
	title: string;
	images: GiphyImage;
}[]

interface GiphyImage {
	downsized: {
		url: string;
	};
}


export type GiphyImages = ReturnType<typeof giphyAdapter>;
