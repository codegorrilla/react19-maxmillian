import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Errorpage from './pages/Error';
import PortfolioDetails from './pages/PortfolioDetails';

export default function App() {
	const router = createBrowserRouter([
		// route definitions => currently using relative path approach
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <Errorpage />,
			children: [
				{ path: '', element: <HomePage /> }, //index: true alternative to path key
				{ path: 'about', element: <AboutPage /> }, //for absolute path => use '/about'
				{ path: 'about/:folioId', element: <PortfolioDetails /> }, //for absolute path => use '/about/:folioId'
			],
		},
	]);
	return <RouterProvider router={router} />;
}
