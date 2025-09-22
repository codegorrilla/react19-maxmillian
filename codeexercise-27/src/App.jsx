import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/ErrorPage';
import EventsRootLayout from './pages/EventsRoot';

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <ErrorPage />,
			children: [
				{ index: true, element: <HomePage /> },
				{
					path: 'events',
					element: <EventsRootLayout />,
					children: [
						{ path: '', element: <EventsPage /> },
						{ path: ':eventId', element: <EventDetailPage /> },
						{ path: 'new', element: <NewEventPage /> },
						{ path: ':eventId/edit', element: <EditEventPage /> },
					],
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}
