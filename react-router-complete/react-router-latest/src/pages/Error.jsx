import { Link } from 'react-router-dom';
export default function Errorpage() {
	return (
		<main>
			<h1>An error occurred.</h1>
			<p>Sorry, we could not find this page.</p>
			<p>
				Visit <Link to='/'>Home</Link> page
			</p>
		</main>
	);
}
