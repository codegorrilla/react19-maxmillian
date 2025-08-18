import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Errorpage from './pages/Error';

export default function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <Errorpage />,
			children: [
				{ path: '/', element: <HomePage /> },
				{ path: '/about', element: <AboutPage /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}
