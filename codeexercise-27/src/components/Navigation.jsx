import { NavLink, Link } from 'react-router-dom';
import classes from './Navigation.module.css';
export default function Navigation() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link to='/'>Hello</Link>
			</div>

			<nav>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
						end={true}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/events'
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
					>
						Events
					</NavLink>
				</li>
			</nav>
		</header>
	);
}
