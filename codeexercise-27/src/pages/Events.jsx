import { Link } from 'react-router-dom';

const EventList = [
	{ id: 1, title: 'Event 1' },
	{ id: 2, title: 'Event 2' },
	{ id: 3, title: 'Event 3' },
];

export default function EventsPage() {
	return (
		<div className='events-container'>
			<h1>Events page</h1>
			<ul>
				{EventList.map((event) => (
					<li key={event.id}>
						<Link to={`${event.id}`}>{event.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
