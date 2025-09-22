import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import classes from './RootLayout.module.css';

export default function RootLayout() {
	return (
		<main>
			<Navigation />
			<section className={classes.container}>
				<Outlet />
			</section>
		</main>
	);
}
