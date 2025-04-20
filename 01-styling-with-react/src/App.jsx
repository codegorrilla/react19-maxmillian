// import { useState } from 'react';
// import './App.css';
// export default function App() {
// 	const [choice, setChoice] = useState(null);

// 	//let textColor = 'white';

// 	// if (choice === 'yes') {
// 	// 	textColor = 'green';
// 	// } else if (choice === 'no') {
// 	// 	textColor = 'red';
// 	// }

// 	return (
// 		<div className='card-container'>
// 			<h1
// 				style={{
// 					color: choice === 'yes' ? 'green' : choice === 'no' ? 'red' : 'white',
// 					transition: 'color 0.5s ease',
// 				}}
// 			>
// 				Do I like CSS
// 			</h1>
// 			<p className='btn-set'>
// 				<button onClick={() => setChoice('yes')}>Yes</button>
// 				<button onClick={() => setChoice('no')}>No</button>
// 			</p>
// 		</div>
// 	);
// }

import { useState } from 'react';

function App() {
	const [choice, setChoice] = useState(null);

	return (
		<div id='app'>
			<h1
				className={
					choice === 'yes'
						? 'highlight-green'
						: choice === 'no'
						? 'highlight-red'
						: undefined
				}
			>
				CSS is great!
			</h1>
			<menu>
				<li>
					<button onClick={() => setChoice('yes')}>Yes</button>
				</li>
				<li>
					<button onClick={() => setChoice('no')}>No</button>
				</li>
			</menu>
		</div>
	);
}

export default App;
