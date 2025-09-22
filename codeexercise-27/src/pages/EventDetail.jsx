import { useParams, Link } from 'react-router-dom';

export default function EventDetailPage() {
	const params = useParams();

	return (
		<div className='events-container'>
			<h1>Event Detail page</h1>
			<p>{params.eventId}</p>
			<Link
				to='..'
				relative='path'
			>
				Back
			</Link>
		</div>
	);
}
