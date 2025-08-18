import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

export default function App() {
	const routeDefinitions = createRoutesFromElements(
		<Route>
			<Route
				path='/'
				element={<HomePage />}
			/>
			<Route
				path='/products'
				element={<ProductsPage />}
			/>
		</Route>
	);

	const router = createBrowserRouter(routeDefinitions);

	return <RouterProvider router={router} />;
}
