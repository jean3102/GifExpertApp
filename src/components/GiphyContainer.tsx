import { useGetGiphy } from '../hooks/useGetGiphy';
import GiphyCard from './GiphyCard';
import { GiphyAddCategoryProps } from './models/GiphyProps.model';
import './styles/giphyContainer.css';

const GiphyContainer = ({ category }: GiphyAddCategoryProps) => {
	const { images, error } = useGetGiphy(category);

	return (
		<section className="container">
			{error.length === 0 ? (
				<>
					<h1>{category}</h1>
					<GiphyCard images={images} />
				</>
			) : (
				<h2>{error}</h2>
			)}
		</section>
	);
};

export default GiphyContainer;
