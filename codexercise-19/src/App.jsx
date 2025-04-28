import { useState } from 'react';

export default function App() {
	const [colorIt, setColorIt] = useState('white');

	// const toggleStyle = () => {
	// 	setColorIt((prev) => (prev === 'white' ? 'red' : 'white'));
	// };

	//let textColor = 'white';

	// if (colorIt === 'white') {
	// 	textColor = 'red';
	// } else {
	// 	textColor = 'white';
	// }

	function toggleStyle() {
		if (colorIt === 'white') {
			setColorIt('red');
		} else {
			setColorIt('white');
		}
	}

	console.log(`${colorIt} is the color`);

	// const toggleStyle = () => {
	// 	setColorIt((prev) => (prev === 'white' ? 'red' : 'white'));
	// };

	return (
		<div>
			<p style={{ color: colorIt }}>Style me!</p>
			<button onClick={toggleStyle}>Toggle style</button>
		</div>
	);
}
