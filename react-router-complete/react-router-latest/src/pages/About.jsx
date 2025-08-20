import { Link } from 'react-router-dom';

const Folios = [
	{ id: 1, title: 'Folio 1' },
	{ id: 2, title: 'Folio 2' },
	{ id: 3, title: 'Folio 3' },
];

export default function AboutPage() {
	return (
		<main>
			<h1>About page</h1>
			<ul>
				{Folios.map((folio) => (
					<li key={folio.id}>
						<Link to={`${folio.id}`}>{folio.title}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
