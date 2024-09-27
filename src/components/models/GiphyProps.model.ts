import { GiphyImages } from '../../models/giphy.model';

export interface GiphyProps {
	images: GiphyImages;
}

export interface GiphyAddCategoryProps {
	category: string;
}

export interface SearchGiphyProps {
	searchByCategory: (category: string) => void;
}
