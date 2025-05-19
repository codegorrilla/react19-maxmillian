import { useRef, useState } from 'react';
import './App.css';

function App() {
	const pickImg = useRef(null);
	//const [filename, setFileName] = useState(null);

	function handleUpload() {
		// Check if the file input is empty
		// if (pickImg.current.files.length === 0) {
		// 	alert('Please select an image');
		// 	return;
		// }

		// // Check if the file is an image
		// const file = pickImg.current.files[0];
		// if (!file.type.startsWith('image/')) {
		// 	alert('Please select a valid image file');
		// 	return;
		// }
		// // Check if the file size is less than 5MB
		// if (file.size > 5 * 1024 * 1024) {
		// 	alert('File size exceeds 5MB');
		// 	return;
		// }
		// // Check if the file name is not empty
		// if (file.name.trim() === '') {
		// 	alert('File name cannot be empty');
		// 	return;
		// }
		// // Check if the file name is not too long
		// if (file.name.length > 255) {
		// 	alert('File name is too long');
		// 	return;
		// }

		pickImg.current.click();
	}

	return (
		<div id='app'>
			<p>Please select an image</p>
			<p>
				<input
					data-testid='file-picker'
					type='file'
					accept='image/*'
					ref={pickImg}
				/>
				<button onClick={handleUpload}>Pick Image</button>
			</p>
		</div>
	);
}

export default App;
