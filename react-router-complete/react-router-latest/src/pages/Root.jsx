import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

export default function RootLayout() {
	return (
		<section className={classes.content}>
			<MainNavigation />
			<Outlet />
		</section>
	);
}
