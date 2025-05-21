import { useRef } from 'react';
import Input from './components/Input.jsx';

export const userData = {
	name: '',
	email: '',
};

export default function App() {
	const userName = useRef();
	const userMail = useRef();

	function handleSaveData() {
		userData.name = userName.current.value;
		userData.email = userMail.current.value;

		console.log(userData);
	}

	return (
		<div id='app'>
			<Input
				type='text'
				label='Your Name'
				ref={userName}
			/>
			<Input
				type='email'
				label='Your E-Mail'
				ref={userMail}
			/>
			<p id='actions'>
				<button onClick={handleSaveData}>Save Data</button>
			</p>
		</div>
	);
}
