import { NavLink } from 'react-router-dom';
export default function EventsNav() {
	return (
		<menu>
			<li>
				<NavLink to='new'>Add New Event</NavLink>
			</li>
			<li>
				<NavLink to=':eventId/edit'>Edit Events</NavLink>
			</li>
		</menu>
	);
}
