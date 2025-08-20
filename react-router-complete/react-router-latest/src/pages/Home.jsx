import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('about');
	}
	return (
		<main>
			<h1>Home page</h1>
			<p>
				Visit our <Link to='about'>about</Link> page.
			</p>
			<p>
				Click the <button onClick={handleClick}>button</button> to visit the
				about page.
			</p>
		</main>
	);
}
