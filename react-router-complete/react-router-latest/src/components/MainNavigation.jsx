import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
	return (
		<header>
			<ul>
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
						to='/about'
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
					>
						About
					</NavLink>
				</li>
			</ul>
		</header>
	);
}
