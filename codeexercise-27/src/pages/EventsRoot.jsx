import { Outlet } from 'react-router-dom';
import EventsNav from '../components/EventsNav';

export default function EventsRootLayout() {
	return (
		<>
			<EventsNav />
			<Outlet />
		</>
	);
}
