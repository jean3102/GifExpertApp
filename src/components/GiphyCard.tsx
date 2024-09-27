import { GiphyProps } from './models/GiphyProps.model';
import './styles/GiphyCard.css';

const GiphyCard = ({ images }: GiphyProps) => {
	return (
		<ul className="giphyCard">
			{images.map(({ id, images, title }) => (
				<li
					className="card"
					key={id}>
					<img
						src={images}
						alt={title}
					/>
					<h4>{title}</h4>
				</li>
			))}
		</ul>
	);
};

export default GiphyCard;
