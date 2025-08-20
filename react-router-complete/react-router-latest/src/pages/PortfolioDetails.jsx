import { Link, useParams } from 'react-router-dom';

export default function PortfolioDetails() {
	const params = useParams();

	return (
		<main>
			<h1>Portfolio Details</h1>
			<p>{params.folioId}</p>
			<p>
				<Link
					to='..'
					relative='path'
				>
					Back
				</Link>
			</p>
		</main>
	);
}
