import { useRef } from 'react';
import Form from './components/Form.jsx';

export default function App() {
	const formRef = useRef();
	function handleRestart() {
		formRef.current.clear();
	}

	return (
		<div id='app'>
			<button onClick={handleRestart}>Restart</button>
			<Form
				action=''
				ref={formRef}
			/>
		</div>
	);
}
